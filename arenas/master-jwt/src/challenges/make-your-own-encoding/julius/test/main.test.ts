import { MessageRouterEncoder } from '..';

const specialCharacters = [
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    "'",
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '[',
    '\\',
    ']',
    '^',
    '_',
    '`',
    '{',
    '|',
    '}',
    '~',
];
const encodeSpecialCharacter = (specialCharacter: string) =>
    `%${specialCharacter.charCodeAt(0).toString(16)}`;

describe('MessageRouterEncoder', () => {
    let encoder: MessageRouterEncoder;

    beforeEach(() => {
        encoder = new MessageRouterEncoder();
    });

    describe('should encode a message', () => {
        describe('should pass given examples', () => {
            it('should pass example 1', () => {
                const source = 'I have 2 apples';
                const expected = 'I have NUM(2) apples';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should pass example 2', () => {
                const source = 'I have 2 apples and 3 oranges';
                const expected = 'I have NUM(2) apples and NUM(3) oranges';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should pass example 3', () => {
                const source = '4 - +8 = -4';
                const expected = 'NUM(4) %2d NUM(8) %3d NUM(-4)';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should pass example 4', () => {
                const source = 'I already sent a message to julius@thearenaproject.co 2 days ago!';
                const expected =
                    'I already sent a message to julius%40thearenaproject%2eco NUM(2) days ago%21';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });
        });

        describe('should encode numbers', () => {
            it('should encode a message made of only a single digit', () => {
                const digits = '0123456789';

                for (const digit of digits) {
                    const source = digit;
                    const expected = `NUM(${digit})`;
                    const encoded = encoder.encode(source);

                    expect(encoded).toBe(expected);
                }
            });

            it('should encode a message made of only one unsigned number', () => {
                const nums = ['101', '23', '34', '234', '345'];

                for (const num of nums) {
                    const source = num;
                    const expected = `NUM(${num})`;
                    const encoded = encoder.encode(source);

                    expect(encoded).toBe(expected);
                }
            });

            it('should encode a number with a leading plus sign (should strip the plus sign)', () => {
                const nums = ['+101', '+23', '+34', '+234', '+345'];

                for (const num of nums) {
                    const source = num;
                    const expected = `NUM(${num.slice(1)})`;
                    const encoded = encoder.encode(source);

                    expect(encoded).toBe(expected);
                }
            });

            it('should encode a negative number', () => {
                const nums = ['-101', '-23', '-34', '-234', '-345'];

                for (const num of nums) {
                    const source = num;
                    const expected = `NUM(${num})`;
                    const encoded = encoder.encode(source);

                    expect(encoded).toBe(expected);
                }
            });

            it('should encode a message made of consecutive negative numbers', () => {
                const source = '-101-23-34-234-345';
                const expected = 'NUM(-101)NUM(-23)NUM(-34)NUM(-234)NUM(-345)';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode a big number that does not fit in a javascript number (i.e a 32-bit integer)', () => {
                const source =
                    '12345678901234567890123456789012345678901234567890123456789012345678901234567890';
                const expected =
                    'NUM(12345678901234567890123456789012345678901234567890123456789012345678901234567890)';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });
        });

        describe('should encode special characters', () => {
            it('should encode a message made of only a single special character', () => {
                for (const specialCharacter of specialCharacters) {
                    const source = specialCharacter;
                    const expected = encodeSpecialCharacter(specialCharacter);
                    const encoded = encoder.encode(source);

                    expect(encoded).toBe(expected);
                }
            });

            it('should encode a message made of consecutive special characters', () => {
                const source = specialCharacters.join('');
                const expected = specialCharacters.map(encodeSpecialCharacter).join('');
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });
        });

        describe('should encore pure text', () => {
            it('should encode an empty string', () => {
                const source = '';
                const expected = '';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode a message made of only a single letter', () => {
                const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

                for (const letter of letters) {
                    const source = letter;
                    const expected = letter;
                    const encoded = encoder.encode(source);

                    expect(encoded).toBe(expected);
                }
            });

            it('should encode a message made of consecutive letters', () => {
                const source = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const expected = source;
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode a message made of an odd number of blank spaces', () => {
                const source = ' ';
                const expected = source;
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode a message made of an even number of blank spaces', () => {
                const source = '          ';
                const expected = source;
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode plain english sentences made of blank spaces and letters only', () => {
                const sentences = [
                    'Where is Brian',
                    'Brian is in the kitchen',
                    'But he is not in the living room',
                    'He is in the kitchen',
                    'Where is the kitchen',
                    'The kitchen is in the basement',
                    'But the basement is not in the living room',
                    'And Brian is not in the basement',
                    'So Brian is in the kitchen',
                    'Where is the living room',
                    'The living room is in the basement',
                    'Thank you Copilot that makes total sense',
                ];

                for (const source of sentences) {
                    const expected = source;
                    const encoded = encoder.encode(source);

                    expect(encoded).toBe(expected);
                }
            });

            it('should encode a message that begins with blank spaces', () => {
                const source = '   Hello';
                const expected = source;
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode a message that ends with blank spaces', () => {
                const source = 'Hello   ';
                const expected = source;
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode a message that begins and ends with blank spaces', () => {
                const source = '   Hello   ';
                const expected = source;
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });
        });

        describe('should encode complete sentences made of any characters', () => {
            it('should encode a sentence that begins with a number', () => {
                const source = '23 is the number of the day';
                const expected = 'NUM(23) is the number of the day';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode a positive number preceded by two plus signs (the first should then be treated as a special character)', () => {
                const source = '++23';
                const expected = '%2bNUM(23)';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode a negative number preceded by an hyphen (negative sign)', () => {
                const source = '--23';
                const expected = '%2dNUM(-23)';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode a sentence that ends with a number', () => {
                const source = 'Hi there, today is day number 23';
                const expected = 'Hi there%2c today is day number NUM(23)';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });

            it('should encode emails', () => {
                const emails = [
                    'mpdrummondcxr@dresstastic.com',
                    'zbelljjuph@bliinkapp.com',
                    'mskinnervuw@bluechipsystems.com',
                    'rjohnsonfad@beaconcommunications.com',
                    'lharriscyf@junkmail.inc',
                    'tpeterstmb@techtoys.com',
                    'kburnsvmx@thebridgetech.com',
                    'lwilsonbic@webjunk.com',
                    'rwatkinszex@applejunkies.com',
                    'jdavisdqk@internetexploder.com',
                ];
                const encodeEmail = (email: string) =>
                    email
                        .replace(/@/g, encodeSpecialCharacter('@'))
                        .replace(/\./g, encodeSpecialCharacter('.'));

                for (const email of emails) {
                    const source = `${email}`;
                    const expected = encodeEmail(email);
                    const encoded = encoder.encode(source);

                    expect(encoded).toBe(expected);
                }
            });

            it('should encode plain english sentences', () => {
                const sentences = [
                    'Squirrels are fascinating creatures with a unique ability to navigate through trees at incredible speeds.',
                    'I love watching squirrels play in the park, chasing each other up and down the trees.',
                    'Did you know that squirrels can run up to 20 miles per hour?',
                    "There's nothing quite like the sound of a squirrel scurrying across the roof in the middle of the night.",
                    'Some species of squirrels, like the red squirrel, rely on pine cones as their primary food source.',
                    "It's amazing to watch squirrels use their tails to help them balance while jumping from branch to branch.",
                    'Squirrels are notorious for stealing birdseed from backyard feeders.',
                    "A group of squirrels is known as a 'scurry', which is a fitting name given their frantic movements.",
                    'Squirrels have a natural instinct to hoard food for the winter months, often creating hidden caches of nuts and seeds.',
                    'The Eastern gray squirrel is one of the most common species of squirrel found in North America.',
                    'For many people, squirrels are seen as a nuisance due to their tendency to damage property.',
                    'Some people believe that feeding squirrels can lead to them becoming dependent on humans for food.',
                    'Squirrels have a keen sense of smell, which helps them locate food sources like acorns and seeds.',
                    'Squirrels are social animals and can often be seen grooming each other in communal areas.',
                    "Squirrels' front teeth never stop growing, so they must constantly chew on objects to keep them trimmed.",
                    "Many squirrels live in nests called 'dreys', which are often built using twigs and leaves.",
                    'Squirrels have a natural fear of predators like hawks and snakes, which can threaten their survival.',
                    'Watching squirrels climb down a tree headfirst is a sight to behold.',
                    'Squirrels are known to communicate with each other through various vocalizations and body language.',
                    'Despite their small size, squirrels are incredibly resilient creatures who have adapted to survive in a wide range of environments.',
                ];

                const expectedSentences = [
                    'Squirrels are fascinating creatures with a unique ability to navigate through trees at incredible speeds%2e',
                    'I love watching squirrels play in the park%2c chasing each other up and down the trees%2e',
                    'Did you know that squirrels can run up to NUM(20) miles per hour%3f',
                    'There%27s nothing quite like the sound of a squirrel scurrying across the roof in the middle of the night%2e',
                    'Some species of squirrels%2c like the red squirrel%2c rely on pine cones as their primary food source%2e',
                    'It%27s amazing to watch squirrels use their tails to help them balance while jumping from branch to branch%2e',
                    'Squirrels are notorious for stealing birdseed from backyard feeders%2e',
                    'A group of squirrels is known as a %27scurry%27%2c which is a fitting name given their frantic movements%2e',
                    'Squirrels have a natural instinct to hoard food for the winter months%2c often creating hidden caches of nuts and seeds%2e',
                    'The Eastern gray squirrel is one of the most common species of squirrel found in North America%2e',
                    'For many people%2c squirrels are seen as a nuisance due to their tendency to damage property%2e',
                    'Some people believe that feeding squirrels can lead to them becoming dependent on humans for food%2e',
                    'Squirrels have a keen sense of smell%2c which helps them locate food sources like acorns and seeds%2e',
                    'Squirrels are social animals and can often be seen grooming each other in communal areas%2e',
                    'Squirrels%27 front teeth never stop growing%2c so they must constantly chew on objects to keep them trimmed%2e',
                    'Many squirrels live in nests called %27dreys%27%2c which are often built using twigs and leaves%2e',
                    'Squirrels have a natural fear of predators like hawks and snakes%2c which can threaten their survival%2e',
                    'Watching squirrels climb down a tree headfirst is a sight to behold%2e',
                    'Squirrels are known to communicate with each other through various vocalizations and body language%2e',
                    'Despite their small size%2c squirrels are incredibly resilient creatures who have adapted to survive in a wide range of environments%2e',
                ];

                for (let i = 0; i < sentences.length; i++) {
                    const source = sentences[i];
                    const expected = expectedSentences[i];
                    const encoded = encoder.encode(source);

                    expect(encoded).toBe(expected);
                }
            });

            it('should encode a sentence that alternates numbers with other characters', () => {
                const source =
                    "23, more like 24, more like 73. Am I 23, or am I 24? Well, I'm 23. I guess I am 23. Oh really, someone said I looked like 18.";
                const expected =
                    'NUM(23)%2c more like NUM(24)%2c more like NUM(73)%2e Am I NUM(23)%2c or am I NUM(24)%3f Well%2c I%27m NUM(23)%2e I guess I am NUM(23)%2e Oh really%2c someone said I looked like NUM(18)%2e';
                const encoded = encoder.encode(source);

                expect(encoded).toBe(expected);
            });
        });
    });
});

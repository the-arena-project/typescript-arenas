import { MessageRouterDecoder } from '..';

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

const encodeSpecialChar = (char: string) => `%${char.charCodeAt(0).toString(16).toUpperCase()}`;
const encodeNumber = (num: string) => `NUM(${num})`;

describe('MessageRouterDecoder', () => {
    let decoder: MessageRouterDecoder;

    beforeEach(() => {
        decoder = new MessageRouterDecoder();
    });

    describe('should decode special characters', () => {
        it('should decode each special character individually', () => {
            for (const specialCharacter of specialCharacters) {
                const encoded = encodeSpecialChar(specialCharacter);
                const decoded = decoder.decode(encoded);

                expect(decoded).toBe(specialCharacter);
            }
        });

        it('should decode a string made up of only special characters', () => {
            const encoded = specialCharacters.map(encodeSpecialChar).join('');
            const decoded = decoder.decode(encoded);

            expect(decoded).toBe(specialCharacters.join(''));
        });
    });

    describe('should decode numbers', () => {
        it('should decode each single unsigned digit individually', () => {
            const digits = '0123456789';
            const encodedDigits = digits.split('').map((c) => encodeNumber(c));

            for (let i = 0; i < digits.length; i++) {
                const encoded = encodedDigits[i];
                const decoded = decoder.decode(encoded);

                expect(decoded).toBe(digits[i]);
            }
        });

        it('should decode each single negative digit individually (except zero)', () => {
            const digits = '123456789';
            const encodedDigits = digits.split('').map((c) => encodeNumber(`-${c}`));

            for (let i = 0; i < digits.length; i++) {
                const encoded = encodedDigits[i];
                const decoded = decoder.decode(encoded);

                expect(decoded).toBe(`-${digits[i]}`);
            }
        });

        it('should decode unsigned numbers individually', () => {
            const numbers = ['123', '456', '789', '43543354', '2435564'];
            const encodedNumbers = numbers.map((n) => encodeNumber(n));

            for (let i = 0; i < numbers.length; i++) {
                const encoded = encodedNumbers[i];
                const decoded = decoder.decode(encoded);

                expect(decoded).toBe(numbers[i]);
            }
        });

        it('should decode negative numbers individually', () => {
            const numbers = ['123', '456', '789', '43543354', '2435564'];
            const encodedNumbers = numbers.map((n) => encodeNumber(`-${n}`));

            for (let i = 0; i < numbers.length; i++) {
                const encoded = encodedNumbers[i];
                const decoded = decoder.decode(encoded);

                expect(decoded).toBe(`-${numbers[i]}`);
            }
        });

        it('should decode a string made up of only numbers', () => {
            const numbers = ['123', '456', '789', '43543354', '2435564'];
            const encodedNumbers = numbers.map((n) => encodeNumber(n));
            const encoded = encodedNumbers.join('');
            const decoded = decoder.decode(encoded);

            expect(decoded).toBe(numbers.join(''));
        });

        it('should decode a string made up of only negative numbers', () => {
            const numbers = ['123', '456', '789', '43543354', '2435564'];
            const encodedNumbers = numbers.map((n) => encodeNumber(`-${n}`));
            const encoded = encodedNumbers.join('');
            const decoded = decoder.decode(encoded);

            expect(decoded).toBe(numbers.map((n) => `-${n}`).join(''));
        });

        it('should decode a string made up of only numbers and negative numbers', () => {
            const numbers = ['123', '456', '789', '43543354', '2435564'];
            const encodedNumbers = numbers.map((n) => encodeNumber(n));
            const encodedNegativeNumbers = numbers.map((n) => encodeNumber(`-${n}`));
            const encoded = [...encodedNumbers, ...encodedNegativeNumbers].join('');
            const decoded = decoder.decode(encoded);

            expect(decoded).toBe([...numbers, ...numbers.map((n) => `-${n}`)].join(''));
        });
    });

    describe('should decode a string made up of normal letters', () => {
        it('should decode a string made up of only normal letters', () => {
            const encoded = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const decoded = decoder.decode(encoded);

            expect(decoded).toBe(encoded);
        });

        it('should decode plain english sentences with no special characters or numbers', () => {
            const sentences = [
                'The quick brown fox jumps over the lazy dog',
                'Amazingly few discotheques provide jukeboxes',
                'This is a sentence with no special characters or numbers',
                'Impressive, right?',
            ];

            for (const sentence of sentences) {
                const encoded = sentence;
                const decoded = decoder.decode(encoded);

                expect(decoded).toBe(sentence);
            }
        });

        it('should decode a string made up of only blanks', () => {
            const encoded = ' '.repeat(100);
            const decoded = decoder.decode(encoded);

            expect(decoded).toBe(encoded);
        });
    });

    describe('should decode a string made up of special characters and numbers', () => {
        it('should decode a string made up of only special characters and numbers', () => {
            const encoded = [
                ...specialCharacters,
                ...['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            ]
                .map((c) => {
                    if (specialCharacters.includes(c)) {
                        return encodeSpecialChar(c);
                    } else {
                        return encodeNumber(c);
                    }
                })
                .join('');
            const decoded = decoder.decode(encoded);

            expect(decoded).toBe(
                [...specialCharacters, ...['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']].join(
                    '',
                ),
            );
        });

        it('should decode a string made up of only special characters and negative numbers', () => {
            const encoded = [
                ...specialCharacters,
                ...['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            ]
                .map((c) => {
                    if (specialCharacters.includes(c)) {
                        return encodeSpecialChar(c);
                    } else {
                        return encodeNumber(`-${c}`);
                    }
                })
                .join('');
            const decoded = decoder.decode(encoded);

            expect(decoded).toBe(
                [
                    ...specialCharacters,
                    ...['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((c) => `-${c}`),
                ].join(''),
            );
        });

        it('should decode plain english sentences with special characters and numbers', () => {
            const sentences = [
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

            const expectedSentences = [
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

            for (let i = 0; i < sentences.length; i++) {
                const encoded = sentences[i];
                const decoded = decoder.decode(encoded);

                expect(decoded).toBe(expectedSentences[i]);
            }
        });
    });
});

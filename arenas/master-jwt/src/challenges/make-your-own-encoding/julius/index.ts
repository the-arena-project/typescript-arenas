enum TokenType {
    DIGIT = 'DIGIT',
    SPECIAL_CHARACTER = 'SPECIAL_CHARACTER',
    UNTOUCHED_SEQUENCE = 'UNTOUCHED_SEQUENCE',
}

interface Token {
    type: TokenType;
    value: string;
}

export class MessageRouterEncoder {
    private static readonly SPECIAL_CHARACTERS = [
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

    private static readonly DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    private isDigit(char: string): boolean {
        return MessageRouterEncoder.DIGITS.includes(char);
    }

    private isDigitEndDelimiter(char: string): boolean {
        return !this.isDigit(char);
    }

    private tokenize(message: string): Token[] {
        const tokens: Token[] = [];
        let untouchedSequenceStartingIndex: number | null = null;
        let digitSequenceStartingIndex: number | null = null;

        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            const isDigit = this.isDigit(char);
            const isSpecialCharacter = this.isSpecialCharacter(char);
            const shouldBreakUntouched = isSpecialCharacter;

            if (this.isDigitEndDelimiter(char) && digitSequenceStartingIndex !== null) {
                if (untouchedSequenceStartingIndex !== null) {
                    tokens.push({
                        type: TokenType.UNTOUCHED_SEQUENCE,
                        value: message.substring(
                            untouchedSequenceStartingIndex,
                            digitSequenceStartingIndex,
                        ),
                    });

                    untouchedSequenceStartingIndex = null;
                }

                tokens.push({
                    type: TokenType.DIGIT,
                    value: message.substring(digitSequenceStartingIndex, i),
                });

                digitSequenceStartingIndex = null;
            }

            if (isDigit) {
                if (digitSequenceStartingIndex === null) {
                    digitSequenceStartingIndex = i;
                }
            }

            if (shouldBreakUntouched && untouchedSequenceStartingIndex !== null) {
                tokens.push({
                    type: TokenType.UNTOUCHED_SEQUENCE,
                    value: message.substring(untouchedSequenceStartingIndex, i),
                });

                untouchedSequenceStartingIndex = null;
            }

            if (isSpecialCharacter) {
                tokens.push({
                    type: TokenType.SPECIAL_CHARACTER,
                    value: char,
                });
            } else {
                if (untouchedSequenceStartingIndex === null) {
                    untouchedSequenceStartingIndex = i;
                }
            }
        }

        if (digitSequenceStartingIndex !== null) {
            if (untouchedSequenceStartingIndex !== null) {
                tokens.push({
                    type: TokenType.UNTOUCHED_SEQUENCE,
                    value: message.substring(
                        untouchedSequenceStartingIndex,
                        digitSequenceStartingIndex,
                    ),
                });

                untouchedSequenceStartingIndex = null;
            }

            tokens.push({
                type: TokenType.DIGIT,
                value: message.substring(digitSequenceStartingIndex),
            });
        }

        if (untouchedSequenceStartingIndex !== null) {
            tokens.push({
                type: TokenType.UNTOUCHED_SEQUENCE,
                value: message.substring(untouchedSequenceStartingIndex),
            });
        }

        return tokens;
    }

    private isSpecialCharacter(char: string): boolean {
        return MessageRouterEncoder.SPECIAL_CHARACTERS.includes(char);
    }

    private encodeSpecialCharacter(char: string): string {
        const hexCode = char.charCodeAt(0).toString(16);

        return `%${hexCode}`;
    }

    private encodeNumber(s: string): string {
        return `NUM(${s})`;
    }

    private tokenTypeToEncoder = {
        [TokenType.SPECIAL_CHARACTER]: this.encodeSpecialCharacter,
        [TokenType.UNTOUCHED_SEQUENCE]: (char: string) => char,
        [TokenType.DIGIT]: this.encodeNumber,
    };

    encode(message: string): string {
        const tokens = this.tokenize(message);
        let encoded = '';

        for (const token of tokens) {
            encoded += this.tokenTypeToEncoder[token.type](token.value);
        }

        return encoded;
    }
}

const encoder = new MessageRouterEncoder();

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

const encodedSentences = sentences.map((sentence) => encoder.encode(sentence));

console.log(encodedSentences);

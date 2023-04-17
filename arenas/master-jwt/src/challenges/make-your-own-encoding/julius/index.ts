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

const encoded = encoder.encode('1 2 3 4 5 6 7 88$$1hey%');

console.log(encoded);

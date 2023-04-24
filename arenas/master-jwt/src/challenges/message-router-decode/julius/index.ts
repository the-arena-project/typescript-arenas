enum TokenType {
    NUMBER = 'NUMBER',
    ENCODED_SPECIAL_CHAR = 'ENCODED_SPECIAL_CHAR',
    UNTOUCHED_SEQUENCE = 'UNTOUCHED_SEQUENCE',
}

interface Token {
    type: TokenType;
    value: string;
}

// create lexer type
export class Lexer {
    private currentTokenIndex = 0;

    constructor(private readonly tokens: Token[]) {}

    current(): Token {
        return this.tokens[this.currentTokenIndex];
    }

    previous(): Token {
        return this.tokens[--this.currentTokenIndex];
    }

    next(): Token {
        return this.tokens[this.currentTokenIndex++];
    }
}

export class MessageRouterDecoder {
    private isEncodedSpecialCharMarker(char: string): boolean {
        return char === '%';
    }

    private readonly NUMBER_PREFIX = 'NUM(';

    private tokenize(message: string): Lexer {
        const tokens: Token[] = [];
        let untouchedSequence = '';

        const commitUntouchedSequence = () => {
            if (untouchedSequence.length > 0) {
                tokens.push({
                    type: TokenType.UNTOUCHED_SEQUENCE,
                    value: untouchedSequence,
                });
                untouchedSequence = '';
            }
        };

        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            const detectPrefix = message.substring(i, i + this.NUMBER_PREFIX.length);

            if (detectPrefix === this.NUMBER_PREFIX) {
                commitUntouchedSequence();

                let j = i + detectPrefix.length;
                while (j < message.length && message[j] !== ')') {
                    j++;
                }

                if (j >= message.length) {
                    throw new Error('Invalid message');
                }

                const num = message.substring(i + detectPrefix.length, j);

                tokens.push({
                    type: TokenType.NUMBER,
                    value: num,
                });

                i = j;
            } else if (this.isEncodedSpecialCharMarker(char)) {
                commitUntouchedSequence();
                const hexVal = message.substring(i + 1, i + 3);
                const decodedChar = String.fromCharCode(parseInt(hexVal, 16));

                tokens.push({
                    type: TokenType.ENCODED_SPECIAL_CHAR,
                    value: decodedChar,
                });

                i += 2;
            } else {
                untouchedSequence += char;
            }
        }

        commitUntouchedSequence();

        return new Lexer(tokens);
    }

    decode(message: string): string {
        const lexer = this.tokenize(message);
        let token: Token | null = null;
        let decoded = '';

        while ((token = lexer.next())) {
            if (token.type === TokenType.NUMBER) {
                decoded += token.value;
            }
            if (token.type === TokenType.ENCODED_SPECIAL_CHAR) {
                decoded += token.value;
            }
            if (token.type === TokenType.UNTOUCHED_SEQUENCE) {
                decoded += token.value;
            }
        }

        return decoded;
    }
}

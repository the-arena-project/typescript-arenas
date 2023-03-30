import { itoji } from "../index";

describe('itoji', () => {
    it('should parse positive zero (0 or +0)', () => {
        expect(itoji(0)).toEqual('👍');
        expect(itoji(+0)).toEqual('👍');
    });

    it('should parse negative zero (-0)', () => {
        expect(itoji(-0)).toEqual('-👍');
    });

    it('should return the emoji-base representation of the passed POSITIVE base-10 number', () => {
        const testValues = [
            {
                n: 111,
                expected: '🐕😊✨'
            },
            {
                n: 42,
                expected: '😊🥹'
            },
            {
                n: 21,
                expected: '🥹😊',
            },
            {
                n: 2134356,
                expected: '🐕👍🐕🐕👍😊🥹🎁'
            },
            {
                n: 32345,
                expected: '✨✨🐕💕🐕'
            }
        ];

        for (const testValue of testValues) {
            expect(itoji(testValue.n)).toEqual(testValue.expected);
        }
    });

    it('should return the emoji-base representation of the passed NEGATIVE base-10 number', () => {
        const testValues = [
            {
                n: -111,
                expected: '-🐕😊✨'
            },
            {
                n: -42,
                expected: '-😊🥹'
            },
            {
                n: -21,
                expected: '-🥹😊',
            },
            {
                n: -2134356,
                expected: '-🐕👍🐕🐕👍😊🥹🎁'
            },
            {
                n: -32345,
                expected: '-✨✨🐕💕🐕'
            }
        ];

        for (const testValue of testValues) {
            expect(itoji(testValue.n)).toEqual(testValue.expected);
        }
    })
})

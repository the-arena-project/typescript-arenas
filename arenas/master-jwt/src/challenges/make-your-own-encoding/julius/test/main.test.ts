import { MessageRouterEncoder } from '..';

describe('MessageRouterEncoder', () => {
    let encoder: MessageRouterEncoder;

    beforeEach(() => {
        encoder = new MessageRouterEncoder();
    });

    describe('should encode a message', () => {
        describe("instruction's examples", () => {
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
                const source = '4 - 8 = -4';
                const expected = 'NUM(4) - NUM(8) = NUM(-4)';
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

            it('should encode a message made of several unsigned numbers, separated by spaces', () => {
                const source = '101 23 34 234 345 243 32 2 2 0 1 2 4 7 1 13 35 345 445 456';
                const expected =
                    'NUM(101) NUM(23) NUM(34) NUM(234) NUM(345) NUM(243) NUM(32) NUM(2) NUM(2) NUM(0) NUM(1) NUM(2) NUM(4) NUM(7) NUM(1) NUM(13) NUM(35) NUM(345) NUM(445) NUM(456)';
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
    });
});

import { MessageRouterEncoder } from '..';

describe("instruction's examples", () => {
    it('should pass example 1', () => {
        const source = 'I have 2 apples';
        const expected = 'I have NUM(2) apples';
        const encoder = new MessageRouterEncoder();
        const encoded = encoder.encode(source);

        expect(encoded).toBe(expected);
    });

    it('should pass example 2', () => {
        const source = 'I have 2 apples and 3 oranges';
        const expected = 'I have NUM(2) apples and NUM(3) oranges';
        const encoder = new MessageRouterEncoder();
        const encoded = encoder.encode(source);

        expect(encoded).toBe(expected);
    });

    it('should pass example 3', () => {
        const source = 'I already sent a message to julius@thearenaproject.co 2 days ago!';
        const expected =
            'I already sent a message to julius%40thearenaproject.co NUM(2) days ago%21';
        const encoder = new MessageRouterEncoder();
        const encoded = encoder.encode(source);

        expect(encoded).toBe(expected);
    });
});

import { strLength } from '../index';

describe('strLength', () => {
    it('Should return the proper length of non-empty strings', () => {
        const testValues = [
            'Hello',
            'World',
            'value '.repeat(100),
            'some-other-string',
            'some-trick-here',
        ];

        for (const testValue of testValues) {
            expect(strLength(testValue)).toEqual(testValue.length);
        }
    });

    it('Should return the proper length of an empty string (zero)', () => {
        expect(strLength('')).toEqual(0);
    });
});

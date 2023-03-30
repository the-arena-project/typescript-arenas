import { split } from '../index';

describe('split', () => {
    it('should split strings in array of characters', () => {
        const testValues = [
            'Hello world this should be splitted in many characters',
            'Another string to split\n',
            'This is another\nmulti-line\nstring to split'
        ];

        for (const testValue of testValues) {
            const ss = split(testValue);

            expect(ss.length).toEqual(testValue.length);
            expect(ss.join('')).toEqual(testValue);
        }
    })
})

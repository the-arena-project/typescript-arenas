import { reverseNumbers } from '../index';

describe('reverseNumbers', () => {
    it('should copy and reverse an array of an even number of numbers', () => {
        const testValues = [
            [1, 2, 3, 4],
            [1, 2],
            [4, 2, 7, 3, 2, 1],
            Array.from({ length: 242 }, (idx) => idx),
        ] as number[][];

        for (const testValue of testValues) {
            const reversed = reverseNumbers(testValue);

            expect(reversed).not.toBe(testValue);
            expect(reverseNumbers(testValue)).toEqual(reversed);
        }
    });

    it('should copy and reverse an array of an odd number of numbers', () => {
        const testValues = [
            [1, 2, 3, 4, 5],
            [1],
            [4, 2, 7, 3, 2, 1, 2],
            Array.from({ length: 221 }, (idx) => idx),
        ] as number[][];

        for (const testValue of testValues) {
            const reversed = reverseNumbers(testValue);

            expect(reversed).not.toBe(testValue);
            expect(reverseNumbers(testValue)).toEqual(reversed);
        }
    });

    it('should return an empty array when reversing an empty array', () => {
        const toReverse = [] as number[];
        const reversed = reverseNumbers(toReverse);

        expect(reversed).not.toBe(toReverse);
        expect(reversed).toEqual(toReverse.reverse());
    });
});

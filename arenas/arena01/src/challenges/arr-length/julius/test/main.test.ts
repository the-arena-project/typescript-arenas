import { arrLength } from '../index';

describe('arrLength', () => {
    it('should return the length of an array of non-zero numbers', () => {
        const arr = [-1, 2, 42, 21, -42, -21, 3, 7, 12];

        expect(arrLength(arr)).toEqual(arr.length);
    });

    it('should return the length of an array of numbers that contains zeros', () => {
        const arr = [1, 2, 0, 42, -42, 21, 0, 23, 10e20, 0, 2];

        expect(arrLength(arr)).toEqual(arr.length);
    });
});

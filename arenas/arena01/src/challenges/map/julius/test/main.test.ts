import { map } from '../index';

describe('map', () => {
    it('should map on every element of an array and create a new array out of it', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const refMapped = arr.map((el) => el * 2);
        const actualMapped = map(arr, (el) => el * 2);

        expect(actualMapped).not.toBe(arr);
        expect(actualMapped).toEqual(refMapped);
    });

    it('should return an empty array when mapping on an empty array', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const arr: any[] = [];
        const actualMapped = map(arr, () => null);

        expect(actualMapped).not.toBe(arr);
        expect(actualMapped).toEqual([]);
    });
});

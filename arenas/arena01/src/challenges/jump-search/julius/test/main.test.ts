import { jumpSearch } from '../index';

type SearchFn = (arr: number[], value: number) => number | undefined;

const searchFn: SearchFn = jumpSearch;

describe('jumpSearch', () => {
    it('should find all the elements of an array', () => {
        const arr = [235, 324, 212, 2132, 124, 1234, 21324, -2, 0].sort((a, b) => a - b);

        for (const nb of arr) {
            expect(searchFn(arr, nb)).toBe(nb);
        }
    });

    it('should return undefined if the element does not exist', () => {
        const arr = [1, 4, 54, 2345, -213].sort((a, b) => a - b);

        expect(searchFn(arr, 42)).toBe(undefined);
        expect(searchFn(arr, 21)).toBe(undefined);
    });
});

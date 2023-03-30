import {linearSearch} from "../index";

type PredicateFn<T> = (elem: T) => boolean;
type SearchFn = <T>(arr: T[], predicate: PredicateFn<T>) => T[]

const searchFn = linearSearch;

describe('linearSearch', () => {
    it('should find all the elements of an array', () => {
        const arr = [ 235, 324, 212, 2132, 124, 1234, 21324, -2, 0 ];

        for (const nb of arr) {
            expect(searchFn(arr, (el) => el === nb)).toBe(nb);
        }
    });

    it('should return a reference to the element, not a copy', () => {
        const arr = [ { value: 5 } ];

        expect(searchFn(arr, () => true)).toBe(arr[0]);
    });

    it('should return undefined if the element does not exist', () => {
        const arr = [ 1, 4, 54, 2345, -213 ];

        expect(searchFn(arr, (el) => el > 1e5)).toBe(undefined);
        expect(searchFn(arr, (el) => el === 0)).toBe(undefined);
    });

    it('should return undefined and never call the predicate if the array is empty', () => {
        const predicate = jest.fn(() => true);

        expect(searchFn([], predicate)).toBe(undefined);
        expect(predicate).not.toHaveBeenCalled();
    });
});

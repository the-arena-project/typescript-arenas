import {insertionSort} from "../index";

type CompareFn<T> = (a: T, b: T) => number;
type SortFn<T> = (arr: T[], cmp: CompareFn<T>) => T[];

const sortFn = insertionSort;

const strcmpAsc = (s1: string, s2: string) => s1.localeCompare(s2);
const strcmpDesc = (s1: string, s2: string) => s2.localeCompare(s1);
const intCmpAsc = (n1: number, n2: number) => n1 - n2;
const intCmpDesc = (n1: number, n2: number) => n2 - n1;

const testSort = <T>(arr: T[], cmp: CompareFn<T>, algorithm: SortFn<T> = sortFn) => {
    const refSortedArray = [...arr].sort(cmp);
    const actualSortedArray = algorithm(arr, cmp);

    expect(actualSortedArray).not.toBe(arr); // must be a copy, the array should not have been sorted in place.
    expect(actualSortedArray).toEqual(refSortedArray);
}

describe('insertionSort', () => {
    it('should return a sorted copy of an array of moderate size', () => {
        const numbers = [-1, 1, 32, -3245, 4, 3, 745, 21, -234, -2324356, 232, 324356421, 13242];

        testSort(numbers, intCmpAsc);
        testSort(numbers, intCmpDesc);

        const strings = [ 'hello', 'world', 'WoRlD', 'HeLlo', '*@/#', '.23AbCdFH.-2', '' ];

        testSort(strings, strcmpAsc);
        testSort(strings, strcmpDesc);
    })

    it('if the array contains only one element, should return a copy of this array with the single element', () => {
        const intArr = [ 1 ];

        testSort(intArr, intCmpAsc);
        testSort(intArr, intCmpDesc);

        const sArr = [ 'Hello' ];

        testSort(sArr, strcmpAsc);
        testSort(sArr, strcmpDesc);
    });

    it('should return a new empty array when sorting an empty array while never executing the comparator', () => {
        const cmp = jest.fn(intCmpAsc);
        const arr = [] as number[];
        const sorted = sortFn(arr, cmp);

        expect(sorted).not.toBe(arr);
        expect(sorted).toEqual([]);
        expect(cmp).not.toHaveBeenCalled();
    });
});

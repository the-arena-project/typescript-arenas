/* eslint-disable @typescript-eslint/no-explicit-any */
import { some } from '../index';

type TestValues = Array<{
    arr: any[];
    predicate: (el: any) => boolean;
}>;

const compare = (testValues: TestValues) => {
    for (const testValue of testValues) {
        const refFound = testValue.arr.some(testValue.predicate);
        const actualFound = some(testValue.arr, testValue.predicate);

        expect(actualFound).toEqual(refFound);
    }
};

describe('some', () => {
    it('should return true because at least one element satisfies the predicate', () => {
        const testValues: TestValues = [
            {
                arr: [1, 2, 3, 4, 5, 6, 42, 3, 2],
                predicate: (n: number) => n === 42,
            },
            {
                arr: [{ count: 5 }, { count: 8 }, { count: 23 }, { count: 12 }, { count: 42 }],
                predicate: (obj: { count: number }) => obj.count >= 20,
            },
            {
                arr: [42, 1, 2, 3, 4, 5],
                predicate: (n: number) => n === 42,
            },
            {
                arr: [1, 2, 42],
                predicate: (n: number) => n === 42,
            },
        ];

        compare(testValues);
    });

    it('should return false since no element satisfies the predicate', () => {
        const testValues: TestValues = [
            {
                arr: [1, 2, 3, 4, 5, 6, 7, -1, -2],
                predicate: (n: number) => n >= 10,
            },
            {
                arr: [-42, 0, 1, 2, 7],
                predicate: (n: number) => n === 42,
            },
        ];

        compare(testValues);
    });
});

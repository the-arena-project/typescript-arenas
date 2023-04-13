/* eslint-disable @typescript-eslint/no-explicit-any */
import { find } from '../index';

type TestValues = Array<{
    arr: any[];
    predicate: (el: any) => boolean;
}>;

const compare = (testValues: TestValues) => {
    for (const testValue of testValues) {
        const refFound = testValue.arr.find(testValue.predicate);
        const actualFound = find(testValue.arr, testValue.predicate);

        expect(actualFound).toBe(refFound);
    }
};

describe('find', () => {
    it('should retrieve the first existing element', () => {
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

    it('should return "undefined" if no element satisfies the predicate', () => {
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

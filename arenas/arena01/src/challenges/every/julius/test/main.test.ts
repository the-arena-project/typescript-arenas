/* eslint-disable @typescript-eslint/no-explicit-any */
import { every } from '../index';

type TestValues = Array<{
    arr: any[];
    predicate: (el: any) => boolean;
}>;

const compare = (testValues: TestValues) => {
    for (const testValue of testValues) {
        const refFound = testValue.arr.every(testValue.predicate);
        const actualFound = every(testValue.arr, testValue.predicate);

        expect(actualFound).toEqual(refFound);
    }
};

describe('every', () => {
    it('should return true because all the elements satisfy the predicate', () => {
        const testValues: TestValues = [
            {
                arr: [1, 2, 3, 4, 5, 6, 7],
                predicate: (n: number) => n >= 0,
            },
            {
                arr: [{ count: 5 }, { count: 8 }, { count: 23 }, { count: 12 }, { count: 42 }],
                predicate: (obj: { count: number }) => typeof obj.count === 'number',
            },
            {
                arr: [-1, -42, -21, -45],
                predicate: (n: number) => n < 0,
            },
        ];

        compare(testValues);
    });

    it('should return false since at least one element does not satisfy the predicate', () => {
        const testValues: TestValues = [
            {
                arr: [1, -1, 2, 1234, 42, -42],
                predicate: (n: number) => n > 0,
            },
            {
                arr: [0, 0, 0, 0, 0, 1],
                predicate: (n: number) => n === 0,
            },
            {
                arr: [1, 0, 0, 0, 0],
                predicate: (n: number) => n === 0,
            },
            {
                arr: [{ count: 5 }, {}, { count: 23 }, { count: 12 }, { count: 42 }],
                predicate: (obj: { count?: number }) => typeof obj.count === 'number',
            },
        ];

        compare(testValues);
    });
});

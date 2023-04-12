import { indexOf } from '../index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IndexOfTestSet = { arr: any[]; elem: any }[];

const compare = (testValues: IndexOfTestSet) => {
    for (const testValue of testValues) {
        expect(indexOf(testValue.arr, testValue.elem)).toEqual(
            testValue.arr.indexOf(testValue.elem),
        );
    }
};

describe('indexOf', () => {
    it('should find the first element that is present', () => {
        const testValues: IndexOfTestSet = [
            {
                arr: [42, 1, 2, 4, 6, 23],
                elem: 42,
            },
            {
                arr: [0, 1, 2, 42],
                elem: 42,
            },
            {
                arr: [0, 0, 0, 0],
                elem: 0,
            },
        ];

        compare(testValues);
    });

    it('should return -1 when an element is NOT present', () => {
        const testValues: IndexOfTestSet = [
            {
                arr: [42, 1, 2, 4, 6, 23],
                elem: 0,
            },
            {
                arr: [],
                elem: 42,
            },
            {
                arr: [-1, 0, 4, 2, 3],
                elem: 6,
            },
        ];

        compare(testValues);
    });

    it('should check for strict equality', () => {
        const testValues: IndexOfTestSet = [
            {
                arr: [1, 2, '3', 4, 5, 6, '7'],
                elem: 3,
            },
            {
                arr: ['4', 5, 6, 7],
                elem: '5',
            },
            {
                arr: ['1', 2, '3', 4],
                elem: '3',
            },
        ];

        compare(testValues);
    });
});

import { insert } from '../index';
import { makeTree, treeToOrderedArray } from './tree-utils';

describe('insert', () => {
    it('should insert a sequence of numbers in ascending order', () => {
        const testValues = [
            [1, 2],
            [-42, 1, 2, 3],
            [-2, -1, 4, 5, 6],
            [34, 35, 36],
            [0],
            [1, 3, 5, 7, 9, 11, 12],
        ];

        for (const testValue of testValues) {
            const actualTree = makeTree(testValue, insert);
            const orderedTreeValues = treeToOrderedArray(actualTree);

            expect(orderedTreeValues).toEqual(testValue);
        }
    });

    it('should insert a sequence of numbers in descending order', () => {
        const testValues = [
            [2, 1],
            [3, 2, 1, -42],
            [6, 5, 4, -1, -2],
            [36, 35, 34],
            [0],
            [12, 11, 9, 7, 5, 3, 1],
        ];

        for (const testValue of testValues) {
            const actualTree = makeTree(testValue, insert);
            const orderedTreeValues = treeToOrderedArray(actualTree);

            expect(orderedTreeValues.reverse()).toEqual(testValue);
        }
    });

    it('should insert only one node in the tree', () => {
        const testValues = [-42, 42, -21, 21, 0, 11, 22, -69, 69];

        for (const testValue of testValues) {
            const actualTree = makeTree([testValue], insert);
            const orderedTreeValues = treeToOrderedArray(actualTree);

            expect(orderedTreeValues).toEqual([testValue]);
        }
    });

    it('should not insert duplicated values', () => {
        const testValues = [
            [0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 2, 3, 2, 4, 7, 4],
            [0, 1, 0, 1, 0, 1, 0],
            [-42, 42, -42, 42, -42, 42, 21, -42, 42, -21],
            [0, 1, 2, 3, 4, 5],
        ];

        for (const testValue of testValues) {
            const actualTree = makeTree(testValue, insert);
            const orderedTreeValues = treeToOrderedArray(actualTree);
            const refValues = [...new Set(testValue)].sort((a, b) => a - b);

            expect(orderedTreeValues).toEqual(refValues);
        }
    });

    it('should insert sets of unordered and unique values', () => {
        const testValues = [
            [
                7630, 4561, 8976, 8612, 6374, 6755, 5845, 2212, 6786, 6919, 514,
                6840, 6204, 6965, 9040, 6000, 1268, 6785, 4513, 4533,
            ],
            [
                1145, 7598, 6041, 2882, 6917, 121, 5920, 6546, 7369, 1033, 1399,
                2233, 8347, 2413, 6758, 7634, 9896, 4177, 721, 468,
            ],
            [
                1239, 1884, 121, 6623, 7147, 349, 8605, 4046, 9592, 1317, 8859,
                8922, 369, 5502, 6383, 1084, 1941, 5604, 7514, 8365,
            ],
            [
                1239, 1884, 121, 6623, 7147, 349, 8605, 4046, 9592, 1317, 8859,
                8922, 369, 5502, 6383, 1084, 1941, 5604, 7514, 8365,
            ],
            [
                4113, 723, 8504, 4718, 9810, 8671, 6115, 4698, 3805, 1491, 2792,
                9920, 4904, 3740, 9465, 5581, 4862, 6840, 4083, 637,
            ],
            [
                2250, 849, 7716, 6939, 6520, 6285, 6720, 4062, 3052, 8125, 4770,
                2322, 5300, 9753, 7434, 1885, 878, 9812, 5904, 7362,
            ],
        ];

        for (const testValue of testValues) {
            const actualTree = makeTree(testValue, insert);
            const orderedTreeValues = treeToOrderedArray(actualTree);
            const refValues = testValue.sort((a, b) => a - b);

            expect(orderedTreeValues).toEqual(refValues);
        }
    });
});

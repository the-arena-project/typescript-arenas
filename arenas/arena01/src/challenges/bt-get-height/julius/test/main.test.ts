import { getHeight } from '../index';
import { makeTree, insert } from './tree-utils';

describe('getHeight', () => {
    it('For n elements inserted in ascending order, should return a height of n-1', () => {
        const testValues = [
            [1, 2, 3, 4, 5, 6, 7, 8],
            [-1, 3, 5, 7, 9, 11, 13, 28],
            [21, 245, 12324, 1245344],
        ];

        for (const testValue of testValues) {
            const actualTree = makeTree(testValue, insert);

            expect(getHeight(actualTree)).toEqual(testValue.length - 1);
        }
    });

    it('For n elements inserted in descending order, should return a height of n-1', () => {
        const testValues = [
            [8, 7, 6, 5, 4, 3, 2, 1],
            [-2, -6, -12, -234, -2345, -223456],
            [2, 1, 0, -42, -84, -168, -324],
            [1, 0, -1],
        ];

        for (const testValue of testValues) {
            const actualTree = makeTree(testValue, insert);

            expect(getHeight(actualTree)).toEqual(testValue.length - 1);
        }
    });

    it('should return a height of -1 if tree is empty', () => {
        expect(getHeight(null)).toEqual(-1);
    });

    it('should return 0 if tree only has one node inserted', () => {
        const actualTree = makeTree([42], insert);

        expect(getHeight(actualTree)).toEqual(0);
    });

    it('should return a height of 1 when 3 elements A, B and C are inserted (in that order) such as A > B and C > A', () => {
        const actualTree = makeTree([1, 0, 2], insert);

        expect(getHeight(actualTree)).toEqual(1);
    });

    /**
     *  A
     *   \
     *    B
     *   /
     *  C
     */
    it('should return a height of 2 when 3 elements A, B and C are inserted (in that order) such as A < B and B > C', () => {
        const actualTree = makeTree([0, 2, 1], insert);

        expect(getHeight(actualTree)).toEqual(2);
    });

    /**
     *     A
     *    /
     *   B
     *    \
     *     C
     */
    it('should return a height of 2 when 3 elements A, B and C are inserted (in that order) such as A < B and B > C', () => {
        const actualTree = makeTree([2, 0, 1], insert);

        expect(getHeight(actualTree)).toEqual(2);
    });
});

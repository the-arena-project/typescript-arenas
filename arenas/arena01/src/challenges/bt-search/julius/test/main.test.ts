import { search } from '../index';
import { makeTree, insert, treeToValueToNode } from './tree-utils';

describe('search', () => {
    it('should find the only value inserted in the tree', () => {
        const tree = makeTree([42], insert);

        expect(search(tree, 42)).toBeDefined();
    });

    it('should find all the values of the tree', () => {
        const testValues = [
            [1, 21, 3243, 2134, -42, 12435, 23, 22, -123, 2343, 3123, 342, 1],
            [2134, 23, 456, 324, 2342, 111, 3224, 232, 3245, 23, 234, -21],
            [2134, 12, 2134, 34, 324, 343, 2435],
        ];

        for (const testValue of testValues) {
            const tree = makeTree(testValue, insert);
            const valueToNode = treeToValueToNode(tree);

            for (const n of testValue) {
                expect(search(tree, n)).toEqual(valueToNode[n]);
            }
        }
    });

    it('should return undefined when a value could not be found', () => {
        const tree = makeTree([1, 2, 3, 4, 6, -1], insert);

        expect(search(tree, -2)).not.toBeDefined();
        expect(search(tree, 5)).not.toBeDefined();
        expect(search(tree, 0)).not.toBeDefined();
    });
});

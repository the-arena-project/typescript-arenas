import { insert, makeTree, treeToOrderedArray } from './tree-utils';
import { insertBalanced } from '../index';

describe('insertBalanced', () => {
    it('should make a balanced tree without rebalancing it', () => {
        const tree = makeTree([1, 0, 2], insertBalanced);

        expect(tree?.value).toEqual(1);
        expect(tree?.left?.value).toEqual(0);
        expect(tree?.right?.value).toEqual(2);
    });

    it('should insert a balanced minimal tree using a RR rotation', () => {
        const tree = makeTree([0, 1, 2], insertBalanced);

        expect(tree?.value).toEqual(1);
        expect(tree?.left?.value).toEqual(0);
        expect(tree?.right?.value).toEqual(2);
    });

    it('should insert a balanced minimal tree using a LL rotation', () => {
        const tree = makeTree([2, 1, 0], insertBalanced);

        expect(tree?.value).toEqual(1);
        expect(tree?.left?.value).toEqual(0);
        expect(tree?.right?.value).toEqual(2);
    });

    it('should insert a balanced minimal tree using a RL rotation', () => {
        const tree = makeTree([0, 2, 1], insertBalanced);

        expect(tree?.value).toEqual(1);
        expect(tree?.left?.value).toEqual(0);
        expect(tree?.right?.value).toEqual(2);
    });

    it('should insert a balanced minimal tree using a LR rotation', () => {
        const tree = makeTree([2, 0, 1], insertBalanced);

        expect(tree?.value).toEqual(1);
        expect(tree?.left?.value).toEqual(0);
        expect(tree?.right?.value).toEqual(2);
    });

    it('should insert a balanced tree by performing two successive RR rotations', () => {
        const tree = makeTree([2, 3, 4, 5, 6], insertBalanced);

        expect(tree?.left?.value).toEqual(2);
        expect(tree?.value).toEqual(3);
        expect(tree?.right?.value).toEqual(5);
        expect(tree?.right?.left?.value).toEqual(4);
        expect(tree?.right?.right?.value).toEqual(6);
    });

    /* do not check whether or not it's balanced, just ensure that the insertion is done properly */
    it('should insert a valid tree', () => {
        const testValues = [
            [1, 2, 3, -2, 32, 132, 12, 3244, 23, -42, -21, 32, 121, 132231, 132],
            [12, 123, 2412, 13, 124, 124, 13, 1312, 13],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            [42, 21, 22, 23, 72, 43567, 12345, 13245, -123, -3245, 2435],
        ];

        for (const testValue of testValues) {
            const unbalancedTree = makeTree(testValue, insert);
            const balancedTree = makeTree(testValue, insertBalanced);

            expect(treeToOrderedArray(balancedTree)).toEqual(treeToOrderedArray(unbalancedTree));
        }
    });
});

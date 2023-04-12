import { getBalanceFactor } from '../index';
import { makeTree, insert } from './tree-utils';

describe('getBalanceFactor', () => {
    it('should return 0 when there are no left and right subtrees', () => {
        const tree = makeTree([42], insert);

        expect(getBalanceFactor(tree)).toEqual(0);
    });

    it('should return 0 when root node is null', () => {
        expect(getBalanceFactor(null)).toEqual(0);
    });

    /**
     *    A
     *  /  \
     * B   C
     */
    it('should return 0 when the tree is perfectly balanced', () => {
        const tree1 = makeTree([1, 0, 2], insert);

        expect(getBalanceFactor(tree1)).toEqual(0);

        const tree2 = makeTree([1, 2, 0], insert);

        expect(getBalanceFactor(tree2)).toEqual(0);
    });

    it('should return a balance factor > 0 when the left subtree is unbalanced', () => {
        /**
         *      A
         *     /
         *    B
         *   /
         *  C
         */
        const tree1 = makeTree([2, 1, 0], insert);

        expect(getBalanceFactor(tree1)).toEqual(2);

        /**
         *       A
         *     /  \
         *    C   B
         *   /
         *  D
         */
        const tree2 = makeTree([2, 3, 1, 0], insert);

        expect(getBalanceFactor(tree2)).toEqual(1);
    });

    it('should return a balance factor < 0 when the right subtree is unbalanced', () => {
        /**
         *    A
         *     \
         *      B
         *       \
         *        C
         */
        const tree1 = makeTree([0, 1, 2], insert);

        expect(getBalanceFactor(tree1)).toEqual(-2);

        /**
         *       A
         *     /  \
         *    B    C
         *          \
         *           D
         */
        const tree2 = makeTree([2, 1, 3, 4], insert);

        expect(getBalanceFactor(tree2)).toEqual(-1);
    });
});

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { rotateLeft } from '../index';
import { makeTree, insert } from './tree-utils';

describe('rotateLeft', () => {
    it('should operate a LL rotation on a perfectly unbalanced tree, where A > B > C', () => {
        const originalTree = makeTree([2, 1, 0], insert);
        const actualTree = makeTree([2, 1, 0], insert);
        const rotatedTree = rotateLeft(actualTree!);

        expect(rotatedTree?.value).toEqual(originalTree?.left?.value);
        expect(rotatedTree?.right?.value).toEqual(originalTree?.value);
        expect(rotatedTree?.left?.value).toEqual(originalTree?.left?.left?.value);
    });

    it('should attach B->right to A->left after RL rotation is performed', () => {
        const originalTree = makeTree([3, 2, 0, 1], insert);
        const actualTree = makeTree([3, 2, 0, 1], insert);
        const rotatedTree = rotateLeft(actualTree!);

        expect(rotatedTree?.value).toEqual(originalTree?.left?.value);
        expect(rotatedTree?.right?.value).toEqual(originalTree?.value);
        expect(rotatedTree?.left?.value).toEqual(originalTree?.left?.left?.value);
        expect(rotatedTree?.right?.left?.value).toEqual(originalTree?.left?.right?.value);
    });
});

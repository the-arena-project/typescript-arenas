/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { rotateRight } from '../index';
import { makeTree, insert } from './tree-utils';

describe('rotateRight', () => {
    it('should operate a RR rotation on a perfectly unbalanced tree, where A > B > C', () => {
        const originalTree = makeTree([0, 1, 2], insert);
        const actualTree = makeTree([0, 1, 2], insert);
        const rotatedTree = rotateRight(actualTree!);

        expect(rotatedTree?.value).toEqual(originalTree?.right?.value);
        expect(rotatedTree?.left?.value).toEqual(originalTree?.value);
        expect(rotatedTree?.right?.value).toEqual(originalTree?.right?.right?.value);
    });

    it('should attach B->left to A->right after RR rotation is performed', () => {
        const originalTree = makeTree([1, 3, 2, 4], insert);
        const actualTree = makeTree([1, 3, 2, 4], insert);
        const rotatedTree = rotateRight(actualTree!);

        expect(rotatedTree?.value).toEqual(originalTree?.right?.value);
        expect(rotatedTree?.left?.value).toEqual(originalTree?.value);
        expect(rotatedTree?.right?.value).toEqual(originalTree?.right?.right?.value);
        expect(rotatedTree?.left?.right?.value).toEqual(originalTree?.right?.left?.value);
    });
});

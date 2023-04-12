/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { rotateLeftRight } from '../index';
import { makeTree, insert } from './tree-utils';

describe('rotateLeftRight', () => {
    it('should operate a LR rotation on a perfectly unbalanced tree', () => {
        const originalTree = makeTree([2, 0, 1], insert);
        const actualTree = makeTree([2, 0, 1], insert);
        const rotatedTree = rotateLeftRight(actualTree!);

        expect(rotatedTree?.value).toEqual(originalTree?.left?.right?.value);
        expect(rotatedTree?.left?.value).toEqual(originalTree?.left?.value);
        expect(rotatedTree?.right?.value).toEqual(originalTree?.value);
    });
});

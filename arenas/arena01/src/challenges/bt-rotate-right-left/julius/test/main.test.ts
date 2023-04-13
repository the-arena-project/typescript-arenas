/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { rotateRightLeft } from '../index';
import { makeTree, insert } from './tree-utils';

describe('rotateRightLeft', () => {
    it('should operate a RL rotation on a perfectly unbalanced tree', () => {
        const originalTree = makeTree([0, 2, 1], insert);
        const actualTree = makeTree([0, 2, 1], insert);
        const rotatedTree = rotateRightLeft(actualTree!);

        expect(rotatedTree?.value).toEqual(originalTree?.right?.left?.value);
        expect(rotatedTree?.left?.value).toEqual(originalTree?.value);
        expect(rotatedTree?.right?.value).toEqual(originalTree?.right?.value);
    });
});

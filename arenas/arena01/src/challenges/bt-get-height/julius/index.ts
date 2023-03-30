import { makeTree, insert } from './test/tree-utils';

type BNode = {
    left: BNode | null;
    right: BNode | null;
    value: number;
};

type GetHeightFn = (root: BNode | null) => number;

export const getHeight: GetHeightFn = (root) => {
    let maxHeight = -1;

    const traverse = (node: BNode | null, depth: number) => {
        if (node === null) {
            return;
        }

        if (node.left !== null) {
            traverse(node.left, depth + 1);
        }
        maxHeight = Math.max(maxHeight, depth);
        if (node.right !== null) {
            traverse(node.right, depth + 1);
        }
    };

    traverse(root, 0);

    return maxHeight;
};

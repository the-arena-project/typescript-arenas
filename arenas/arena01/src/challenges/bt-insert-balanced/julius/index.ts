import { rotateLeft, rotateLeftRight, rotateRight, rotateRightLeft } from './rotate';
import { BNode } from './test/tree-utils';

type InsertBalancedFn = (root: BNode | null, value: number) => BNode;

const rotationLabelToRotationFn = {
    LL: rotateLeft,
    RR: rotateRight,
    LR: rotateLeftRight,
    RL: rotateRightLeft,
};

const performRotation = (root: BNode, rotationLabel: keyof typeof rotationLabelToRotationFn) =>
    rotationLabelToRotationFn[rotationLabel](root);

type GetBalanceFn = (root: BNode | null) => number;

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

export const getBalanceFactor: GetBalanceFn = (root) => {
    return root ? getHeight(root.left) - getHeight(root.right) : 0;
};

const insert = (root: BNode | null, value: number): BNode => {
    if (root === null) {
        return {
            left: null,
            right: null,
            value,
        };
    }

    if (value < root.value) {
        root.left = insert(root.left, value);
    }
    if (value > root.value) {
        root.right = insert(root.right, value);
    }

    const balanceFactor = getBalanceFactor(root);

    /* rebalancing needed */
    if (Math.abs(balanceFactor) > 1) {
        if (balanceFactor === 2) {
            const bf2 = getBalanceFactor(root.left);

            return performRotation(root, bf2 > 0 ? 'LL' : 'LR');
        }
        if (balanceFactor === -2) {
            const bf2 = getBalanceFactor(root.right);

            return performRotation(root, bf2 > 0 ? 'RL' : 'RR');
        }
    }

    return root;
};

export const insertBalanced: InsertBalancedFn = (root, value) => {
    return insert(root, value);
};

import { BNode } from "./tree-utils";

type RotateFn = (root: BNode) => BNode;

export const rotateRight: RotateFn = (root) => {
    if (!root || !root.right || !root.right.right) {
        return root;
    }

    let n1 = root, n2 = root.right;

    n1.right = n2.left;
    n2.left = n1;

    return n2;
}

export const rotateRightLeft: RotateFn = (root) => {
    if (!root || !root.right || !root.right.left) {
        return root;
    }

    let n1 = root, n2 = root.right, n3 = root.right.left;

    n2.left = n3.right;
    n1.right = n3;
    n3.right = n2;

    return rotateRight(n1)
}

export const rotateLeft: RotateFn = (root) => {
    if (!root || !root.left || !root.left.left) {
        return root;
    }

    let n1 = root, n2 = root.left;

    n1.left = n2.right;
    n2.right = n1;

    return n2;
}

export const rotateLeftRight: RotateFn = (root) => {
    if (!root || !root.left || !root.left.right) {
        return root;
    }

    let n1 = root, n2 = root.left, n3 = root.left.right;

    n2.right = n3.left;
    n1.left = n3;
    n3.left = n2;

    return rotateLeft(root);
}

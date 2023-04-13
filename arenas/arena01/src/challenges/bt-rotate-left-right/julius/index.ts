type RotateFn = (root: BNode) => BNode;

type BNode = {
    left: BNode | null;
    right: BNode | null;
    value: number;
};

export const rotateLeft: RotateFn = (root) => {
    if (!root || !root.left || !root.left.left) {
        return root;
    }

    const n1 = root,
        n2 = root.left;

    n1.left = n2.right;
    n2.right = n1;

    return n2;
};

export const rotateLeftRight: RotateFn = (root) => {
    if (!root || !root.left || !root.left.right) {
        return root;
    }

    const n1 = root,
        n2 = root.left,
        n3 = root.left.right;

    n2.right = n3.left;
    n1.left = n3;
    n3.left = n2;

    return rotateLeft(root);
};

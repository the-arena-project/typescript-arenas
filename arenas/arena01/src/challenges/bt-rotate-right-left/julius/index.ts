type RotateFn = (root: BNode) => BNode;

type BNode = {
    left: BNode | null;
    right: BNode | null;
    value: number;
};

export const rotateRight: RotateFn = (root) => {
    if (!root || !root.right || !root.right.right) {
        return root;
    }

    const n1 = root,
        n2 = root.right;

    n1.right = n2.left;
    n2.left = n1;

    return n2;
};

export const rotateRightLeft: RotateFn = (root) => {
    if (!root || !root.right || !root.right.left) {
        return root;
    }

    const n1 = root,
        n2 = root.right,
        n3 = root.right.left;

    n2.left = n3.right;
    n1.right = n3;
    n3.right = n2;

    return rotateRight(n1);
};

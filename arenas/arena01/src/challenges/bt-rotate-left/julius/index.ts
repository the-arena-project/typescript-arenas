type BNode = {
    left: BNode | null;
    right: BNode | null;
    value: number;
};

type RotateFn = (root: BNode) => BNode;

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

type BNode = {
    left: BNode | null;
    right: BNode | null;
    value: number;
};

type Search = (root: BNode | null, value: number) => BNode | undefined;

export const search: Search = (root, value) => {
    if (root === null) {
        return undefined;
    }

    if (value < root.value) {
        return search(root.left, value);
    }
    if (value > root.value) {
        return search(root.right, value);
    }
    if (value === root.value) {
        return root;
    }
};

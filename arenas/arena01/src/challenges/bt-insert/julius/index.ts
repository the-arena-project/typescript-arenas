type BNode = {
    left: BNode | null;
    right: BNode | null;
    value: number;
};

type InsertFn = (root: BNode | null, value: number) => BNode;

export const insert: InsertFn = (root, value) => {
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

    return root;
};

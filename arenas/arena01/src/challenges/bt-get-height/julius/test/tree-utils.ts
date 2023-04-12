export type BNode = {
    left: BNode | null;
    right: BNode | null;
    value: number;
};

type InsertFn = (root: BNode | null, value: number) => BNode;

export const makeTree = (values: number[], insertFn: InsertFn): BNode | null => {
    let treeRoot: BNode | null = null;

    for (const value of values) {
        treeRoot = insertFn(treeRoot, value);
    }

    return treeRoot;
};

export const treeToOrderedArray = (root: BNode | null) => {
    const sortedValues: number[] = [];

    const traverse = (node: BNode | null) => {
        if (!node) {
            return;
        }

        if (node.left !== null) {
            traverse(node.left);
        }

        sortedValues.push(node.value);

        if (node.right !== null) {
            traverse(node.right);
        }
    };

    traverse(root);

    return sortedValues;
};

export const treeToValueToNode = (root: BNode | null) => {
    const valueToNode: Record<number, BNode> = {};

    const traverse = (node: BNode | null) => {
        if (!node) {
            return;
        }

        if (node.left !== null) {
            traverse(node.left);
        }

        valueToNode[node.value] = node;

        if (node.right !== null) {
            traverse(node.right);
        }
    };

    traverse(root);

    return valueToNode;
};

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

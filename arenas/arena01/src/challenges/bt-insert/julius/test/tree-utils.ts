import { insert } from '../index';

type BNode = {
    left: BNode | null;
    right: BNode | null;
    value: number;
};

type InsertFn = (root: BNode | null, value: number) => BNode;

export const makeTree = (
    values: number[],
    insertFn: InsertFn
): BNode | null => {
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

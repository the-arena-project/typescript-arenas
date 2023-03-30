type BNode = {
    left: BNode|null,
    right: BNode|null,
    value: number
}

type GetBalanceFn = (root: BNode|null) => number

type GetHeightFn = (root: BNode | null) => number;

const getHeight: GetHeightFn = (root) => {
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
}

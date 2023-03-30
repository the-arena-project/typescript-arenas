import { receiveMessageOnPort } from "worker_threads";

type BNode = {
    left: BNode|null,
    right: BNode|null,
    value: number
}

type RotateFn = (root: BNode) => BNode

export const rotateRight: RotateFn = (root) => {
    if (!root || !root.right || !root.right.right) {
        return root;
    }

    let n1 = root, n2 = root.right;
    
    n1.right = n2.left;
    n2.left = n1;

    return n2;
}
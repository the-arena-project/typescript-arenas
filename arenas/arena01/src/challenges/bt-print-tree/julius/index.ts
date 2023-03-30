import {BNode} from "./test/tree-utils";
import {writeSync} from "fs";

const printPadding = (padding: number) => {
    if (padding === 0) {
        return;
    }
    let i = 0;
    while (i < padding) {
        if (i + 1 === padding) {
            writeSync(1, '|___');
        } else {
            writeSync(1, '|   ')
        }
        i++;
    }
}

const printTreeRecursive = (root: BNode|null, padding: number) => {
    if (!root) {
        return;
    }
    printPadding(padding);
    console.log(root.value);
    if (root.right) {
        printTreeRecursive(root.right, padding + 1);
    }
    if (root.left) {
        printTreeRecursive(root.left, padding + 1);
    }
}
type PrintTreeFn = (root: BNode|null) => void
export const printTree: PrintTreeFn = (root) => {
    printTreeRecursive(root, 0);
}

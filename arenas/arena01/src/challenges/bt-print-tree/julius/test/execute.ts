import { printTree } from '../index';
import {makeTree, insertBalanced} from "./tree-utils";

const testValues = process.argv[2].split(',').map((str) => parseInt(str));
const balancedTree = makeTree(testValues, insertBalanced);

printTree(balancedTree);

Write a function called insertBalanced that adds an element to your binary tree and rebalances it if necessary according to the specifications of an AVL tree.
If the root does not exist, your function should create and return the first node.

Your function should conform to the following prototype:

```typescript
type InsertBalancedFn = (root: BNode | null, value: number) => BNode
```

Write a function called insert that adds a leaf to a binary search tree passed as an argument.

If the tree is empty, the root is created and returned.

There is no need to balance the tree.

Your function should return the root of the tree after insertion.

```typescript
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type InsertFn = (root: BNode | null, value: number) => BNode
```

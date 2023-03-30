Write a function called deleteAt that removes a node from a linked list at the desired index and returns the removed node.

If the list contains only one node, there is nothing to remove.
If the list contains only one node, your function must return it. We only check that the correct node is returned, not what it points to.

The function will return undefined if the node is not found.

```typescript
type DeleteAtFn = <T> (list: Link<T> | null, index: number) => Link<T>|undefined
```

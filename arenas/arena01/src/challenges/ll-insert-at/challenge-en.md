Write a function called insertAt that adds a link to a linked list at the specified index argument and returns the created link.

For example, if you insert a node D at index 1 in a list A -> B -> C, you will get A -> D -> B -> C.

If the index is 0 and the list is null, then the created link is returned.

If there is no link at the existing index, there is no insertion to be done and the function returns undefined.

Your function should conform to the following prototype:

```typescript
type InsertAtFn = <T> (list: Link<T> | null, index: number, data: T) => Link<T> | undefined
```

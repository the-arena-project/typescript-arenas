Write a function called search that starts a search in a binary search tree passed as an argument.

The function should return the node containing the searched value if it is found, undefined otherwise.

Your function should conform to the following prototype:

```typescript
type SearchFn = (root: BNode | null, value: number) => BNode | undefined
```

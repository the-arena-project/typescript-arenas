Write a function called merge that merges two linked lists in such a way that the last link of the first one is positioned before the first link of the second one.

If the first list is empty, you should return the second one.

Your function should conform to the following prototype:

```typescript
type MergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T> | null
```

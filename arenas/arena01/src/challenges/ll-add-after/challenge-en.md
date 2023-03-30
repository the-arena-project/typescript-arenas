Write a function called addAfter that takes as its first argument a node of a linked list and creates and adds a new node after it.

The new node must contain the value of data.

If link already pointed to another node, you must ensure that the chain is not broken after your insertion.

The added node must be returned.

Your function must conform to the following prototype:

```typescript
type AddAfterFn = <T> (link: Link<T>|null, data: T) => Link<T>
```

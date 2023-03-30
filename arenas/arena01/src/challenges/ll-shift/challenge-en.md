Write a function called shift that removes the first link in a linked list passed as a parameter and returns the new first link if it exists.

The old link must point to null.

Your function must conform to the following prototype:

```typescript
type ShiftFn = <T> (list: Link<T> | null) => Link<T> | undefined
```

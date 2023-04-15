Write a function called `find` that reproduces the same behavior as Array.find but on a linked list.

Your function should conform to the following prototype:

```typescript
type CallbackFn<T> = (elem: Link<T>) => boolean
type FindFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => Link<T> | undefined
```

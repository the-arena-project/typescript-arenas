Write a function called map that reproduces the same behavior as Array.map but on a linked list.

Your function should conform to the following prototype:

```typescript
type CallbackFn<T, R> = (elem: Link<T>, index: number) => R
type MapFn = <T, R> (list: Link<T> | null, cb: CallbackFn<T, R>) => Array<R>
```

Write a function called forEach that reproduces the same behavior as Array.forEach but on a linked list.

Your function should conform to the following prototype:


```typescript
type CallbackFn<T> = (elem: Link<T>, index: number) => void

type ForEachFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => void
```

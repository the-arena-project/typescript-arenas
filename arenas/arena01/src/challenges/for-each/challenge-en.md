Write a function called forEach that allows executing a callback function on each element of an array.

The function will be prototyped as follows:

```typescript
type CallbackFn = (elem: any) => any
type ForEachFn = (arr: any[], cb: CallbackFn) => void
```

Usage examples:

```typescript
forEach(["hello", "world"], printString)
// hello
// world
```

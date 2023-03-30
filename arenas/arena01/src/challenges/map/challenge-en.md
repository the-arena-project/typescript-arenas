Write a function called map that executes a callback function on each element of an array and returns an array with the result of each callback.

The function should be prototyped as follows:

```typescript
type CallbackFn = (elem: any) => any
type MapFn = (arr: any[], cb: CallbackFn) => any[]
```

Usage examples:

```typescript
map([1,2,3], (elem) => (elem * 2));
// [2,4,6]
```

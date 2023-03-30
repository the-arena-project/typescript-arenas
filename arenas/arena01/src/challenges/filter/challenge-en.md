Write a function called filter that returns an array filtered based on the return value of its callback function passed as an argument.
If the callback function returns true, the element is kept.
If the callback function returns false, the element is not kept.

The initial array MUST NOT be mutated.

The function will be prototyped as follows:

```typescript
type CallbackFn = (elem: any) => boolean
type FilterFn = (arr: any[], cb: CallbackFn) => any[]
```

Usage examples:

```typescript
filter([1,2,3], (elem) => (elem === 1));
// [1]
```

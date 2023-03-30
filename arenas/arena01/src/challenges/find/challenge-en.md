Write a function called find that returns the first element that matches the predicate of the callback function.
If the callback function returns true, the element is returned.
If no element matches, the function returns undefined.

The original array must not be mutated.

The function will be prototyped as follows:

```typescript
type CallbackFn = (elem: any) => boolean
type FindFn = (arr: any[], cb: CallbackFn) => any
```

Usage examples:

```
find([1,2,3], (elem) => (elem === 2));
// 2
```

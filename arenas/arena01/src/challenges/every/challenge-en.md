Write a function called every that returns true if all elements match the predicate of the callback function, and false otherwise.

The initial array MUST NOT be mutated.

The function will be prototyped as follows:

```typescript
type CallbackFn = (elem: any) => boolean
type EveryFn = (arr: any[], cb: CallbackFn) => boolean
```

Usage examples:

```typescript
every([1,2,3], (elem) => (elem === 3));
// false
every([1,1,1], (elem) => (elem === 1));
// true
```

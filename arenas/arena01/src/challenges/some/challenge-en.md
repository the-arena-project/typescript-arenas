Write a function called some that returns true if at least one of the elements matches the predicate of the callback function, and false otherwise.

The initial array must not be mutated.

The function will be prototyped in the following way:

```typescript
type CallbackFn = (elem: any) => boolean
type SomeFn = (arr: any[], cb: CallbackFn) => boolean
```

Usage example:

```typescript
some([1,2,3], (elem) => (elem === 3));
// true
some([1,2,3], (elem) => (elem === 5));
// false
```

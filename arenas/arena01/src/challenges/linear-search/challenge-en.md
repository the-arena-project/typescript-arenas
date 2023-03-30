Write a function called linearSearch that reproduces the behavior of Array.find.

If the element is found, it is returned; otherwise, the function returns undefined.

The element is found if the predicate function returns true.

For this exercise, you will implement a linear search algorithm.

```typescript
type PredicateFn<T> = (elem: T) => boolean
type SearchFn = <T>(arr: T[], predicate: PredicateFn<T>) => T
```

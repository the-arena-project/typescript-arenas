Write a function called quickSort that takes an array as an argument and returns a sorted copy of the array.

The order is defined by the comparison function passed as the second argument.

For this exercise, you will implement a quick sort algorithm.

```typescript
type CompareFn<T> = (a: T, b: T) => number
type SortFn = <T>(arr: T[], cmp: CompareFn<T>) => T[]
```

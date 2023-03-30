Write a function called mergeSort that takes an array as an argument and returns a sorted copy of the array.

The order is defined by the comparison function passed as the second argument.

For this exercise, you will implement a merge sort algorithm.

Your function should conform to the following prototype:

```typescript
type CompareFn<T> = (a: T, b: T) => number
type SortFn = <T>(arr: T[], cmp: CompareFn<T>) => T[]
```

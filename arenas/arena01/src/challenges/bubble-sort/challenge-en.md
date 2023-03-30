Write a function called bubbleSort that takes an array as an argument and returns a copy of the array sorted.

The order is defined by the comparison function passed as a second argument.

For this exercise, you will implement a bubble sort algorithm.

Your function should conform to the following prototype:

```typescript
type CompareFn<T> = (a: T, b: T) => number
type SortFn = <T>(arr: T[], cmp: CompareFn<T>) => T[]
```

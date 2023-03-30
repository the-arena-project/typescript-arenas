Write a `diff` function that returns a new array containing only the unique elements in arrA (present in arrA and absent in arrB).

The initial array MUST NOT be mutated.

The function will be prototyped as follows:

```typescript
type DiffFn = (arrA: number[], arrB: number[]) => number[]
```

Example:

```typescript
diff([1,2,3], [1,4,5]);
// [2,3]
```

Write a function called getAt that takes the index of a link in a given list as an argument and returns the corresponding link or undefined if it is not found.

We guarantee that in all cases, n >= 0. We will not test anything else.

Your function should conform to the following prototype:

```typescript
type GetAtFn = <T> (list: Link<T> | null, index: number) => Link<T>| undefined
```

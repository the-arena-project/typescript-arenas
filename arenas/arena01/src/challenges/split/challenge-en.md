Write a function called split that takes a string and returns an array with one character per index.

For this exercise, the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) is strictly forbidden.
So, you CANNOT do:

```typescript
const split: SplitFn = (str) => [...str];
```

The function will be prototyped in the following way:

```typescript
type SplitFn = (str: string) => string[]
```

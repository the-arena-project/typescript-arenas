Write a function itobin that converts a number into its binary representation as a string.

This is what you just did, but with a representation in a different base.

The constraints are the same as for the previous exercise, except that the representation must be in binary base.

Your function must conform to the following prototype:

```typescript
type ItobinFn = (nb: number) => string
```

Usage examples:

```typescript
itobin(22)  // '10110'
itobin(0)   // '0'
itobin(-0)  // '-0'
itobin(-10) // '-1010'
```

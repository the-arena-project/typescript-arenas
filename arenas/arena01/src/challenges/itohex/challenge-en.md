Write a function itohex that converts a number into its hexadecimal representation as a string.

The concept is exactly the same as the previous two exercises.

Only the base changes.

We will use the following hexadecimal base: `0123456789ABCDEF`

Your function must conform to the following prototype:

```typescript
type ItohexFn = (nb: number) => string
```

Usage examples:

```typescript
itohex(10)     // 'A'
itohex(111)    // '6F'
itohex(-111)   // '-6F'
itohex(255)    // 'FF'
itohex(0)      // '0'
itohex(-0)     // '-0'
```

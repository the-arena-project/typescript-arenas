Warning: for this exercise, using the native type conversion of TypeScript is forbidden. Therefore, this kind of thing is not allowed:

```typescript
const nb = 21;

nb + "" // INTERDIT
```


Write a function itoa that converts a number into its string representation.

Yes, this is the opposite of what you just did.

Note the following constraints:

- nb will always be an integer, your code must not handle decimal numbers in any way.

- nb can be negative or positive, but the representation you generate should never include a + sign to mark the positivity of the number.

Your function must conform to the following prototype:


```typescript
type ItoaFn = (nb: number) => string
```

Here are some examples of invoking your function and the expected results:

```typescript
itoa(21)  // '21'
itoa(-21) // '-21'
itoa(0)   // '0'
itoa(-0)  // '-0'
```

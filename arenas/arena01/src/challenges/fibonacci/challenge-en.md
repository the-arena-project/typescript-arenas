Write a function fibonacci that returns the value of the nth term of the Fibonacci sequence, where n >= 1.

It might be helpful to look at the definition of this sequence to complete this exercise :')

Please note: our sequence starts at n = 1

This means:

```typescript
fibonacci(1) === 0 // true
fibonacci(2) === 1 // true
fibonacci(3) === 1 // true
fibonacci(4) === 2 // true
```

Your function must be recursive. This is mandatory. No bargaining. It should conform to the following prototype:

```
type FibonacciFn = (n: number) => number
```

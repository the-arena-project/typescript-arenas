Write a function called concatN that returns a new string that is the concatenation of strA and the first n characters of strB where n >= 0.

strA and strB should not be mutated.

The function will be prototyped as follows:

```typescript
type ConcatNFn = (strA: string, strB: string, n: number) => string
```

Usage examples:

```typescript
concatN("hello", "world", 3);
// "hellowor"
concatN("hello", "world", 100);
// "helloworld"
```

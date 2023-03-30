Write a function called compareN that compares n characters of two strings and returns the number of different characters, such that n >= 0.

strA and strB should not be mutated.

If one of the strings is longer than the other and the number n of compared characters is not reached, then all the extra elements present in the largest string MUST be counted as different since there is no character to compare for the other string.

The function will be prototyped as follows:

```typescript
type CompareNFn = (strA: string, strB: string, n: number) => number
```

Usage examples:

```typescript
compareN("hello", "habbo", 3);
// 2
compareN("hello", "habbo", 30);
// 3
compareN("julius", "julius2", 7);
// 1
```

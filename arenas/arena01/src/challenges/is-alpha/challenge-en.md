Write a function called isAlpha that returns true if a string is composed only of letters from the alphabet (lowercase or uppercase, excluding accents).

The function should be prototyped as follows:

```typescript
type IsAlphaFn = (str: string) => boolean
```

Usage examples:

```typescript
isAlpha("BonjourJeSuisContent");
// true
isAlpha("Bonjour 123");
// false
isAlpha("Bonjour ");
// false
```

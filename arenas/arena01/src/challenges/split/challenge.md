Écrire une fonction appelée `split` qui prend une chaîne de caractères et retourne un tableau avec un caractère par index.

Pour cet exercice, le [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) est **strictement interdit**.
Ainsi, vous ne pouvez PAS faire :

```typescript
const split: SplitFn = (str) => [...str];
```

La fonction sera prototypée de la manière suivante :

```typescript
type SplitFn = (str: string) => string[]
```
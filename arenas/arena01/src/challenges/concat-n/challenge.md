Écrire une fonction appelée `concatN` qui retourne une nouvelle chaîne de caractères qui est la concaténation de `strA` et des `n` premiers caractères de `strB` où `n >= 0`.

`strA` et `strB` ne doivent pas être mutés.

La fonction sera prototypée de la manière suivante :

```typescript
type ConcatNFn = (strA: string, strB: string, n: number) => string
```

Exemples d'utilisation:

```typescript
concatN("hello", "world", 3);
// "hellowor"
concatN("hello", "world", 100);
// "helloworld"
```
Écrire une fonction appelée `compareN` qui compare `n` caractères de deux chaînes et retourne le nombre de caractères différents, tel que `n >= 0`.

`strA` et `strB` ne doivent pas être mutés.

Si une des chaînes de caractères est plus longue que l’autre et que le nombre `n` de caractères comparés n’est pas atteint, alors tous les éléments présents en plus dans la chaîne la plus grande **DOIVENT** être comptabilisés comme étant différents, puisqu’il n’y a aucun caractère à comparer pour l’autre chaîne.

La fonction sera prototypée de la manière suivante :

```typescript
type CompareNFn = (strA: string, strB: string, n: number) => number
```

Exemples d'utilisation :

```typescript
compareN("hello", "habbo", 3);
// 2
compareN("hello", "habbo", 30);
// 3
compareN("julius", "julius2", 7);
// 1
```
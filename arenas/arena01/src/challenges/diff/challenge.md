Écrire une fonction `diff` qui retourne un nouveau tableau contenant exclusivement les éléments uniques à `arrA` (présents dans `arrA` et absents dans `arrB`).

Le tableau initial NE doit PAS être muté.

La fonction sera prototypée de la manière suivante :

```typescript
type DiffFn = (arrA: number[], arrB: number[]) => number[]
```

Exemples d'utilisation :

```typescript
diff([1,2,3], [1,4,5]);
// [2,3]
```
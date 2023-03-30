Écrire une fonction appelée `count` qui parcourt une liste chaînée passée en argument et qui retourne le nombre de maillons présents.

Votre fonction devra se conformer au prototype suivant :

```typescript
type CountFn = <T> (list: Link<T>|null) => number
```
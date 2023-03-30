Écrire une fonction appelée `bubbleSort` qui prend un tableau en argument et retourne une copie du tableau dans l'ordre.

L'ordre est défini par la fonction de comparaison passée en deuxième argument.

Pour cet exercice vous implémenterez un algorithme de type bubble sort.

Votre fonction devra se conformer au prototype suivant :

```typescript
type CompareFn<T> = (a: T, b: T) => number
type SortFn = <T>(arr: T[], cmp: CompareFn<T>) => T[]
```
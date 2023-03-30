Écrire une fonction appelée `linearSearch` qui reproduit le comportement de `Array.find`.

Si l'élément est trouvé, il est retourné, sinon la fonction retourne `undefined`.

L'élément est trouvé si la fonction de prédicat retourne true.

Pour cet exercice vous implémenterez un algorithme de type linear search.

```typescript
type PredicateFn<T> = (elem: T) => boolean
type SearchFn = <T>(arr: T[], predicate: PredicateFn<T>) => T
```
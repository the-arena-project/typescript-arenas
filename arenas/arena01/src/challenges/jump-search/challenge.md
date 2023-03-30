Écrire une fonction appelée `jumpSearch` qui reproduit le comportement de `Array.find`.

Si l'élément est trouvé, il est retourné, sinon la fonction retourne `undefined`.

Pour cet exercice vous implémenterez un algorithme de type jump search.

Votre fonction devra se conformer au prototype suivant :

```typescript
type SearchFn = (arr: number[], value: number) => number | undefined
```
Écrire une fonction appelée `merge` qui fusionne deux listes chaînées de manière que le dernier maillon de la première soit positionné avant le premier maillon de la deuxième.

Si la première liste est vide, tu devras retourner la deuxième.

Votre fonction devra se conformer au prototype suivant :

```typescript
type MergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T> | null
```
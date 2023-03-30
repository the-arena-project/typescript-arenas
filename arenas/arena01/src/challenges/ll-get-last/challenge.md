Écrire une fonction appelée `getLast` qui parcourt une liste chaînée et retourne le dernier maillon de la liste.

Votre fonction devra se conformer au prototype suivant :

```typescript
type GetLastFn = <T> (list: Link<T>|null) => Link<T>|null
```
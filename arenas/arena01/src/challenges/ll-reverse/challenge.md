Écrire une fonction appelée `reverse` qui inverse l'ordre des maillons d'une liste chaînée. La nouvelle tête de liste doit être retournée.

Votre fonction devra se conformer au prototype suivant :

```typescript
type ReverseFn = <T> (list: Link<T> | null) => Link<T> | null
```
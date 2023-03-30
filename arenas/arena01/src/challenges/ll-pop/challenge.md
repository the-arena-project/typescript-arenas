Écrire une fonction appelée `pop` qui supprime le dernier maillon d'une liste chaînée passée en paramètre et retourne ce maillon s'il existe.

Votre fonction devra se conformer au prototype suivant :

```typescript
type PopFn = <T> (list: Link<T> | null) => Link<T> | undefined
```
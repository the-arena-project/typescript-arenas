Écrire une fonction appelée `shift` qui supprime le premier maillon d'une liste chaînée passée en paramètre et retourne le nouveau premier maillon s'il existe.

L'ancien maillon doit pointer vers `null`.

Votre fonction devra se conformer au prototype suivant :

```typescript
type ShiftFn = <T> (list: Link<T> | null) => Link<T> | undefined
```
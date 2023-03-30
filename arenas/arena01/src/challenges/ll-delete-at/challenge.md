Écrire une fonction appelée `deleteAt` qui supprime un maillon d'une liste chaînée à l'index souhaité et retourne le maillon supprimé.

Si la liste ne contient qu'un seul maillon, il n'y a rien à supprimer.
Si la liste ne contient qu'un seul maillon, votre fonction doit le retourner. Nous vérifions uniquement que le bon maillon est retourné, pas ce sur quoi ce dernier pointe.

La fonction retournera `undefined` si le maillon n'est pas trouvé.

```typescript
type DeleteAtFn = <T> (list: Link<T> | null, index: number) => Link<T>|undefined
```

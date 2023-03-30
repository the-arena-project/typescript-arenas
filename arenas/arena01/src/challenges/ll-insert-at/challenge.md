Écrire une fonction appelée `insertAt` qui ajoute un maillon à une liste chaînée à l'index indiqué en argument et retourne le maillon créé.

Par exemple, si on insère un noeud `D` à l'index `1` d'une liste `A -> B -> C`, on obtiendra `A -> D -> B -> C`.

Si l'index est `0` et que la liste est `null`, alors le maillon créé est retourné.

Si il n'y a pas de maillon à l'index existant, il n'y a aucune insertion à faire et la fonction retourne `undefined`.

Votre fonction devra se conformer au prototype suivant :

```typescript
type InsertAtFn = <T> (list: Link<T> | null, index: number, data: T) => Link<T> | undefined
```
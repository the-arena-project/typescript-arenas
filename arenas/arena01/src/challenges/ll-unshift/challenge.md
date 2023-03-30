Écrire une fonction appelée `unshift` qui prend en premier argument le premier maillon d'une liste chaînée et qui lui ajoute un maillon devant.

La valeur `next` du nouveau maillon devra pointer sur `begin`.

Le nouveau maillon devra être retourné.

Le nouveau maillon devra contenir la valeur de `data`.

Votre fonction devra se conformer au prototype suivant :

```typescript
type UnshiftFn = <T> (begin: Link<T>|null, data: T) => Link<T>
```
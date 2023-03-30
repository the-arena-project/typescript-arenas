Écrire une fonction appelée `addAfter` qui prend en premier argument un maillon d'une liste chaînée et qui crée puis ajoute un nouveau maillon à la suite.

Le nouveau maillon devra contenir la valeur de `data`.

Si `link` pointait déjà sur un autre maillon, vous devez faire en sorte que la chaîne ne soit pas cassée après votre insertion.

Le maillon ajouté devra être retourné.

Votre fonction devra se conformer au prototype suivant :

```typescript
type AddAfterFn = <T> (link: Link<T>|null, data: T) => Link<T>
```
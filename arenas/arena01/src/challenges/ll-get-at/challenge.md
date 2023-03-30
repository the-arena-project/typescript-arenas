Écrire une fonction appelée `getAt` qui prend l'index d'un maillon d'une liste passée en argument et retourne le maillon correspondant ou `undefined` s'il n'est pas trouvé.

Nous vous garantissons que dans tout les cas, `n >= 0`. Nous ne testerons pas autre chose.

Votre fonction devra se conformer au prototype suivant :

```typescript
type GetAtFn = <T> (list: Link<T> | null, index: number) => Link<T>| undefined
```
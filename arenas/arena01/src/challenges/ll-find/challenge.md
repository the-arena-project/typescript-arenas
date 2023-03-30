Écrire une fonction appelée `find` qui reproduit le même comportement que `Array.find` mais sur une liste chaînée.

Votre fonction devra se conformer au prototype suivant :

```typescript
type CallbackFn<T> = (elem: Link<T>) => boolean
type FindFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => Link<T> | undefined
```
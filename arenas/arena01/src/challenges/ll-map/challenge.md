Écrire une fonction appelée `map` qui reproduit le même comportement que `Array.map` mais sur une liste chaînée.

Votre fonction devra se conformer au prototype suivant :

```typescript
type CallbackFn<T, R> = (elem: Link<T>, index: number) => R
type MapFn = <T, R> (list: Link<T> | null, cb: CallbackFn<T, R>) => Array<R>
```
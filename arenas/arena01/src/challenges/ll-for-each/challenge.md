Écrire une fonction appelée `forEach` qui reproduit le même comportement que `Array.forEach` mais sur une liste chaînée.

Votre fonction devra se conformer au prototype suivant :

```typescript
type CallbackFn<T> = (elem: Link<T>, index: number) => void

type ForEachFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => void
```
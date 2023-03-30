Écrire une fonction appelée `push` qui ajoute un maillon à la fin d'une liste chaînée passée en argument et retourne le maillon créé.

Si la liste passée en argument est `null`, le maillon sera créé.

```typescript
type PushFn = <T> (list: Link<T>|null, data: T) => Link<T>
```
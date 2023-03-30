Écrire une fonction appelée `some` qui retourne `true` si au moins un des éléments correspond au prédicat de la fonction de callback, et `false` sinon.

Le tableau initial ne doit pas être muté.

La fonction sera prototypée de la manière suivante :

```typescript
type CallbackFn = (elem: any) => boolean
type SomeFn = (arr: any[], cb: CallbackFn) => boolean
```

Exemples d'utilisation :

```typescript
some([1,2,3], (elem) => (elem === 3));
// true
some([1,2,3], (elem) => (elem === 5));
// false
```
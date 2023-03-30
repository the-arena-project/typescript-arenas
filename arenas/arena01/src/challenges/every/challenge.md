Écrire une fonction appelée `every` qui retourne `true` si tous les éléments correspondent au prédicat de la fonction de callback, et `false` sinon.

Le tableau initial NE DOIT PAS être muté.

La fonction sera prototypée de la manière suivante :

```typescript
type CallbackFn = (elem: any) => boolean
type EveryFn = (arr: any[], cb: CallbackFn) => boolean
```

Exemples d'utilisation :

```typescript
every([1,2,3], (elem) => (elem === 3));
// false
every([1,1,1], (elem) => (elem === 1));
// true
```
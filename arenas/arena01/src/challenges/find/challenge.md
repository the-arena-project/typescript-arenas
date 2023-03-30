Écrire une fonction appelée `find` qui retourne le premier élément qui match avec le prédicat de la fonction de callback.
Si la fonction de callback retourne `true`, l'élément est retourné.
Si aucun élément ne correspond, la fonction retourne `undefined`.

Le tableau initial ne doit pas être muté.

La fonction sera prototypée de la manière suivante :

```typescript
type CallbackFn = (elem: any) => boolean
type FindFn = (arr: any[], cb: CallbackFn) => any
```

Exemples d'utilisation :

```
find([1,2,3], (elem) => (elem === 2));
// 2
```
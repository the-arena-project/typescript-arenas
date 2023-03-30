Écrire une fonction appelée `map` qui permet d'exécuter une fonction de callback sur chaque élément d'un tableau et retourne un tableau avec le résultat de chaque callback.

La fonction sera prototypée de la manière suivante :

```typescript
type CallbackFn = (elem: any) => any
type MapFn = (arr: any[], cb: CallbackFn) => any[]
```

Exemples d'utilisation:

```typescript
map([1,2,3], (elem) => (elem * 2));
// [2,4,6]
```
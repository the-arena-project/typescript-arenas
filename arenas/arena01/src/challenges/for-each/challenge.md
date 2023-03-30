Écrire une fonction appelée `forEach` qui permet d'exécuter une fonction de callback sur chaque élément d'un tableau.

La fonction sera prototypée de la manière suivante :

```typescript
type CallbackFn = (elem: any) => any
type ForEachFn = (arr: any[], cb: CallbackFn) => void
```

Exemples d'utilisation:

```typescript
forEach(["hello", "world"], printString)
// hello
// world
```
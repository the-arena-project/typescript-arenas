Écrire une fonction appelée `filter` qui retourne un tableau filtré selon le retour de sa fonction de callback passée en argument.
Si la fonction de callback retourne `true`, l'élément est conservé.
Si la fonction de callback retourne `false`, l'élément n'est pas conservé.

Le tableau initial NE doit PAS être muté.

La fonction sera prototypée de la manière suivante :

```typescript
type CallbackFn = (elem: any) => boolean
type FilterFn = (arr: any[], cb: CallbackFn) => any[]
```

Exemples d'utilisation :

```typescript
filter([1,2,3], (elem) => (elem === 1));
// [1]
```
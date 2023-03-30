Écrire une fonction appelée `ultimerge` qui fusionne deux listes en combinant les éléments un à un.
Cette fonction doit retourner le premier noeud de la liste `A` ou le premier noeud de la liste `B` dans le cas où `A === null`

Votre fonction devra se conformer au prototype suivant :

```typescript
type UltimergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T>|null
```

Voici quelques exemples (sous forme de schémas) :

```
listA : 1 -> 1 -> 1
listB : 2 -> 2 -> 2
Résultat : 1 -> 2 -> 1 -> 2 -> 1 -> 2

ListA : 1
ListB : 2 -> 2 -> 2
Résultat : 1 -> 2 -> 2 -> 2

ListA : 2 -> 2 -> 2
ListB : 1
Résultat : 2 -> 1 -> 2 -> 2

ListA : null
ListB : 1 -> 2 -> 3
Résultat : 1 -> 2 -> 3

ListA : 1 -> 2 -> 3
ListB : null
Résultat : 1 -> 2 -> 3
```
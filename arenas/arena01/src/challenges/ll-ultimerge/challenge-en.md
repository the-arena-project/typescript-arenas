Write a function called ultimerge that merges two lists by combining elements one by one.
This function should return the first node of list A or the first node of list B in the case where A === null

Your function must conform to the following prototype:

```typescript
type UltimergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T>|null
```

Here are some examples (in the form of diagrams):

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

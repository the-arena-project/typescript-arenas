Écrire une fonction `itobin` qui convertit un nombre en sa représentation binaire sous forme de chaîne de caractères.

C'est ce que vous venez de faire, mais **avec une représentation dans une base différente**.

Les contraintes sont les mêmes que pour l'exercice précédent, à l'exception du fait que la représentation doit être en base binaire.

Votre fonction doit se conformer au prototype suivant :

```typescript
type ItobinFn = (nb: number) => string
```

Et voici quelques d'exemples d'invocation :

```typescript
itobin(22)  // '10110'
itobin(0)   // '0'
itobin(-0)  // '-0'
itobin(-10) // '-1010'
```
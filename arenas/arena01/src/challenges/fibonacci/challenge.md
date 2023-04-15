Écrire une fonction `fibonacci` qui retourne la valeur du terme n de la suite de Fibonacci, où  n >= 1.

Il peut être utile de se pencher sur la définition de cette suite pour faire cet exercice :')

Attention : notre suite commence à n = 1

C’est-à-dire que :

```typescript
fibonacci(1) === 0 // true
fibonacci(2) === 1 // true
fibonacci(3) === 1 // true
fibonacci(4) === 2 // true
```

Votre fonction doit être récursive. C'est obligatoire. Pas de marchandage. Elle devra se conformer au prototype suivant :

```
type FibonacciFn = (n: number) => number
```
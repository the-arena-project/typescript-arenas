Écrire une fonction `itohex` qui convertit un nombre en sa **représentation hexadécimale** sous forme de chaîne de caractères.

Le concept est exactement le même que les deux exercices précédents.

**Seule la base change**.

Nous utiliserons la base hexadécimale suivante : `0123456789ABCDEF`

Votre fonction doit se conformer au prototype suivant :

```typescript
type ItohexFn = (nb: number) => string
```

Et voici quelques exemples d'invocation :

```typescript
itohex(10)     // 'A'
itohex(111)    // '6F'
itohex(-111)   // '-6F'
itohex(255)    // 'FF'
itohex(0)      // '0'
itohex(-0)     // '-0'
```
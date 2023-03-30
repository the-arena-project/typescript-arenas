**Attention**: pour cet exercise il est interdit d'utiliser la conversion de type native de Typescript. Ainsi, ce type de choses est interdit:

```typescript
const nb = 21;

nb + "" // INTERDIT
```

Écrire une fonction `itoa` qui convertit un nombre en sa représentation sous forme de chaîne de caractères.

Oui, c'est l'inverse de ce que vous venez de faire.

Notez les contraintes suivantes :

- `nb` sera toujours un entier, votre code ne doit en aucun cas gérer les nombres décimaux.

- `nb` peut-être négatif ou positif, mais la représentation que vous générez ne doit jamais inclure de signe + pour marquer la positivité du nombre.

Votre fonction doit se conformer au prototype suivant :

```typescript
type ItoaFn = (nb: number) => string
```

Voici quelques exemples d'invocation de votre fonction et les résultats attendus :

```typescript
itoa(21)  // '21'
itoa(-21) // '-21'
itoa(0)   // '0'
itoa(-0)  // '-0'
```
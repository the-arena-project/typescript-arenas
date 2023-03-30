**Attention**: dans cet exercice, la conversion de type native de Typescript est strictement interdite. Ainsi, vous n'avez pas le droit de faire ce genre de choses :

```typescript
+"1"    // INTERDIT
"1" * 1 // INTERDIT
"1" % 1 // INTERDIT
```

Écrire une fonction `atoi` qui convertit la représentation sous forme de chaîne de caractères d'un nombre en son équivalent numérique, comme le fait la fonction `parseInt` (qui est pour rappel **INTERDITE**).

La représentation passée en argument sera celle d'un entier en **base 10**.

La représentation peut être précédée par **un et un seul signe**, dénoté par le caractère `+` ou `-`.

Le nombre représenté peut être précédé par un nombre arbitraire de zéros : `000000000034` est une représentation valide, en base 10, de `34`.

Ainsi, `135`, `-135` et `+000135` sont des exemples de représentation valide que vous devez être capable de gérer.

En revanche, `-+-1213` ou encore `AF2` sont deux exemples de représentation invalides. Dans ce cas, votre fonction doit retourner `NaN`.

Votre fonction devra se conformer au prototype suivant :

```typescript
type AtoiFn = (str: string) => number
```
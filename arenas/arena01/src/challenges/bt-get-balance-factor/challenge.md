Écrire une fonction appelée `getBalanceFactor` qui retourne le *balance factor* d'un nœud de votre arbre binaire.

La *balance factor* correspond à la hauteur du nœud de gauche moins la hauteur du nœud de droite.

Votre fonction devra se conformer au prototype suivant :

```typescript
type GetBalanceFn = (root: BNode | null) => number
```
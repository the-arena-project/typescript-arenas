Écrire une fonction appelée `getHeight` qui retourne la hauteur d'un nœud de votre arbre binaire.

La hauteur d'un nœud est la profondeur maximale de ce nœud jusqu'à une feuille.

Un arbre réduit à un seul nœud est de hauteur `0`.

Un nœud null est de hauteur `-1`.

Votre fonction devra se conformer au prototype suivant :

```typescript
type GetHeightFn = (root: BNode | null) => number
```
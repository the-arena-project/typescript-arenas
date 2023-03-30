Écrire une fonction appelée `insertBalanced` qui ajoute un élément à votre arbre binaire et le rééquilibre si nécessaire selon les spécifications d'un arbre AVL.
Si la racine n'existe pas, votre fonction doit créer et retourner le premier noeud.

Votre fonction devra se conformer au prototype suivant :

```typescript
type InsertBalancedFn = (root: BNode | null, value: number) => BNode
```
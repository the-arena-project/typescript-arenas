Écrire une fonction appelée `search` qui démarre une recherche dans un arbre binaire de recherche passé en argument.

La fonction doit retourner le noeud qui contient la valeur recherchée si elle est trouvée, `undefined` sinon.

Votre fonction devra se conformer au prototype suivant :

```typescript
type SearchFn = (root: BNode | null, value: number) => BNode | undefined
```
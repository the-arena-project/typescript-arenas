Écrire une fonction appelée `insert` qui ajoute une feuille à un arbre binaire de recherche passé en argument.

Si l'arbre est vide, la racine est créée et retournée.

Il n'est pas demandé d'équilibrer l'arbre.

Votre fonction doit retourner la racine de l'arbre après insertion.

```typescript
type BNode = {
	left: BNode|null,
	right: BNode|null,
	value: number
}

type InsertFn = (root: BNode | null, value: number) => BNode
```
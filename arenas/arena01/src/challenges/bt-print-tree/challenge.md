Écrire une fonction appelée `printTree` qui affiche l'ensemble des nœuds d'un arbre sur la sortie standard.

Chaque lien entre chaque nœud contiendra un pipe `|` aligné verticalement puis trois underscores `___`.

Aucun espace n'est demandé entre la valeur d'un nœud et son lien.

La fonction devra toujours afficher le nœud de droite en priorité, puis tous les enfants du nœud de droite, puis passer aux nœuds de gauche.

Votre fonction devra se conformer au prototype suivant :

```
type PrintTreeFn = (root: BNode | null) => void
```

Voici un exemple de rendu pour un arbre équilibré où la racine à pour valeur `4`.

```
4
|___6
|   |___9
|   |   |___10
|   |   |___7
|   |___5
|___2
|   |___3
|   |___1
```
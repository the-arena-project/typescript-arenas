Écrire une fonction appelée `findPath` qui retourne la taille du chemin qui mène à la sortie d'une grotte donnée sous forme de matrice binaire.

Les coordonnées d'entrée (`begin`) et de sortie (`end`) ainsi que la carte de la grotte (`matrix`) seront donnés en arguments.

Un chemin ne peut être construit que si la cellule a une valeur égale à `1`.

On ne peut se déplacer que d'une case à la fois, en vertical ou en horizontal.

Les déplacements en diagonale sont interdits.

Les bords de la matrice ne sont pas traversants : on n'est pas dans Harry Potter.

Les arguments correspondront toujours à une matrice valide.

Une matrice contiendra toujours une seule solution et cette solution sera forcément valide.

Voici un exemple de grotte dont l'entrée est `[1, 0]` et la sortie `[2, 1]` et dont la solution est `3`.

```typescript
[
	[0,1,1,0],
	[0,0,1,0],
]
```

La fonction sera prototypée de la manière suivante :

```typescript
type Coordinate = [number, number]
type Matrix = number[][]
type FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => number
```
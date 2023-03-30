Écrire une fonction appelée `shortestPath` qui retourne la longueur du chemin le plus court pour sortir d'un labyrinthe donné sous forme de matrice binaire.

Les coordonnées d'entrée (`begin`) et de sortie (`end`) ainsi que le labyrinthe (`matrix`) seront donnés en arguments.

Un chemin ne peut être construit que si la cellule a une valeur égale à `1`.

On ne peut se déplacer que d'une case à la fois, en vertical ou en horizontal.

Les déplacements en diagonale sont interdits.

Les bords de la matrice ne sont pas traversants: on n'est pas dans Harry Potter.

Les arguments correspondront toujours à une matrice valide.

Une matrice contiendra toujours au moins une solution valide.

Voici un exemple de labyrinthe dont l'entrée est `[1, 0]` et la sortie `[3, 4]`.

```typescript
[
	[0,1,1,0,1],
	[0,0,1,0,1],
	[0,0,1,1,1],
	[0,0,1,0,1],
	[0,0,1,1,1],
]
```

Dans ce cas la taille du chemin le plus court est égale à `7`.

La fonction sera prototypée de la manière suivante :

```typescript
type Coordinate = [number, number]
type Matrix = number[][]
type FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => number
```
Write a function called `findPath` that returns the length of the path leading to the exit of a given cave in the form of a binary matrix.

The coordinates of the entrance (begin) and exit (end) as well as the cave map (matrix) will be given as arguments.

A path can only be built if the cell has a value equal to 1.

You can only move one cell at a time, vertically or horizontally.

Diagonal moves are forbidden.

The edges of the matrix are not traversable: we are not in Harry Potter.

The arguments will always correspond to a valid matrix.

A matrix will always contain a single solution, and this solution will necessarily be valid.

Here is an example of a cave with an entrance at `[1, 0]` and an exit at `[2, 1]`, with a solution of `3`.
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

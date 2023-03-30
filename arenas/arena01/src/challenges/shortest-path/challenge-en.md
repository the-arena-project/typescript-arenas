Write a function called shortestPath that returns the length of the shortest path to exit a given maze in the form of a binary matrix.

The coordinates of the entry (begin) and exit (end) as well as the maze (matrix) will be given as arguments.

A path can only be constructed if the cell has a value equal to 1.

You can only move one square at a time, vertically or horizontally.

Diagonal movements are not allowed.

The edges of the matrix are not wraparound: we are not in Harry Potter.

The arguments will always correspond to a valid matrix.

A matrix will always contain at least one valid solution.

Here's an example of a maze where the entry is [1, 0] and the exit is [3, 4].

```typescript
[
	[0,1,1,0,1],
	[0,0,1,0,1],
	[0,0,1,1,1],
	[0,0,1,0,1],
	[0,0,1,1,1],
]
```

In this case, the length of the shortest path is equal to 7.

The function will be prototyped in the following way:

```typescript
type Coordinate = [number, number]
type Matrix = number[][]
type FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => number
```

type Coordinate = [number, number];
type Matrix = number[][];

type FindPathFn = (begin: Coordinate, end: Coordinate, matrix: number[][]) => number;

const goRight = (matrix: Matrix, currentPosition: Coordinate): Coordinate => {
    const newPosition = [...currentPosition] as Coordinate;
    newPosition[0] += 1;
    return newPosition;
};

const goLeft = (matrix: Matrix, currentPosition: Coordinate): Coordinate => {
    const newPosition = [...currentPosition] as Coordinate;
    newPosition[0] -= 1;
    return newPosition;
};

const goUp = (matrix: Matrix, currentPosition: Coordinate): Coordinate => {
    const newPosition = [...currentPosition] as Coordinate;
    newPosition[1] -= 1;
    return newPosition;
};

const goDown = (matrix: Matrix, currentPosition: Coordinate): Coordinate => {
    const newPosition = [...currentPosition] as Coordinate;
    newPosition[1] += 1;
    return newPosition;
};

const isAlreadyExplored = (position: Coordinate, explored: Coordinate[]): boolean => {
    return explored.some((item) => item[0] === position[0] && item[1] === position[1]);
};

const isPositionEqual = (positionA: Coordinate, positionB: Coordinate) => {
    return positionA[0] === positionB[0] && positionA[1] === positionB[1];
};

const canMoveToPosition = (
    position: Coordinate,
    explored: Coordinate[],
    matrix: Matrix,
): boolean => {
    const valueAtPosition = matrix[position[1]] ? matrix[position[1]][position[0]] : 0;
    return !isAlreadyExplored(position, explored) && valueAtPosition === 1;
};

const shortedPathRecursive = (
    currentPosition: Coordinate,
    matrix: Matrix,
    alreadyExplored: Coordinate[],
    targetPosition: Coordinate,
    results: Coordinate[][],
): Coordinate[] => {
    if (isPositionEqual(currentPosition, targetPosition)) {
        results.push(alreadyExplored);
        return alreadyExplored;
    }
    const exploredTmp = [...alreadyExplored, currentPosition];
    const rightPos = goRight(matrix, currentPosition);
    if (canMoveToPosition(rightPos, alreadyExplored, matrix)) {
        shortedPathRecursive(rightPos, matrix, exploredTmp, targetPosition, results);
    }
    const leftPos = goLeft(matrix, currentPosition);
    if (canMoveToPosition(leftPos, alreadyExplored, matrix)) {
        shortedPathRecursive(leftPos, matrix, exploredTmp, targetPosition, results);
    }
    const upPos = goUp(matrix, currentPosition);
    if (canMoveToPosition(upPos, alreadyExplored, matrix)) {
        shortedPathRecursive(upPos, matrix, exploredTmp, targetPosition, results);
    }
    const downPos = goDown(matrix, currentPosition);
    if (canMoveToPosition(downPos, alreadyExplored, matrix)) {
        shortedPathRecursive(downPos, matrix, exploredTmp, targetPosition, results);
    }
    return exploredTmp;
};

export const findPath: FindPathFn = (begin, end, matrix) => {
    const currentCoordinate: Coordinate = begin;
    const results = [] as Coordinate[][];
    shortedPathRecursive(currentCoordinate, matrix, [], end, results);
    const shortest = results.map((a) => a.length + 1).sort((a, b) => a - b);
    return shortest[0];
};

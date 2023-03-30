type Runway = [number, number][];
type AvoidTheWarriorsFn = (runway: Runway) => number;

type Coordinate = {
    x: number;
    y: number;
}

const locateBegin = (runway: Runway) => {
    const numberOfRows = runway.length;
    return {
        x: 0,
        y: numberOfRows - 1,
    }
}

const getUpperPosition = (coords: Coordinate, runway: Runway) => {
    const position = { ...coords };
    position.y -= 1;
    return position;
}

const getRightOrLeftPosition = (coords: Coordinate, runway: Runway) => {
    if (coords.x === 0) {
        return { x: coords.x + 1, y: coords.y };
    }
    return { x: coords.x - 1, y: coords.y };
}

const recurse = ( runway: Runway,  currentPosition: Coordinate,  stepCount: number ): number => {
    const upperPosition = getUpperPosition(currentPosition, runway)

    const isEndLine = upperPosition.y === 0;
    const isEnd = isEndLine && upperPosition.x === 0;
    if (isEnd) {
        return stepCount;
    }

    if (isEndLine) {
        return stepCount + 1;
    }

    const upperPositionValue = runway[upperPosition.y][upperPosition.x];
    const isWarrior = upperPositionValue === 1;
    if (isWarrior) {
        const nextPos = getRightOrLeftPosition(currentPosition, runway);
        return recurse(runway, nextPos, stepCount + 1);
    }
    return recurse(runway, upperPosition, stepCount);
}

export const avoidTheWarriors:AvoidTheWarriorsFn = (corridor) => {
    const begin = locateBegin(corridor);
    return recurse(corridor, begin, 0);
}

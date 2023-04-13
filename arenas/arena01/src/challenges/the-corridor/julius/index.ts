type Corridor = number[];

type ExitTheCorridorFn = (corridor: Corridor) => number;

const getNextIndex = (corridor: Corridor, currentIndex: number) => {
    if (corridor[currentIndex + 1] > 0) {
        return corridor[currentIndex + 1];
    }
    return currentIndex + 1;
};

const recurse = (corridor: Corridor, index: number, stepCount: number): number => {
    const nextIndex = getNextIndex(corridor, index);
    const isExit = index === corridor.length - 1;
    if (isExit) {
        return stepCount + 1;
    }
    return recurse(corridor, nextIndex, stepCount + 1);
};

export const exitTheCorridor: ExitTheCorridorFn = (corridor) => {
    if (!corridor.length) {
        return 0;
    }
    return recurse(corridor, 0, 0);
};

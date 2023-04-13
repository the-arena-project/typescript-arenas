type DiffFn = (arrA: number[], arrB: number[]) => number[];

export const diff: DiffFn = (arrA, arrB) => {
    const set = new Set([...arrB]);
    const diffed = [] as number[];
    let i = 0;

    while (i !== arrA.length) {
        if (!set.has(arrA[i])) {
            diffed.push(arrA[i]);
        }

        ++i;
    }

    return diffed;
};

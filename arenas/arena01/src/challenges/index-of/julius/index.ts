type IndexOfFn = (arr: unknown[], elem: unknown) => number

export const indexOf: IndexOfFn = (arr, elem) => {
    let i = 0;

    while (i !== arr.length) {
        if (arr[i] === elem) {
            return i;
        }
        ++i;
    }

    return -1;
}
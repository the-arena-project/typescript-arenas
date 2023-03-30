type ArrLengthFn = (arr: number[]) => number

export const arrLength: ArrLengthFn = (arr) => {
    let i = 0;

    while (typeof arr[i] !== 'undefined') {
        ++i;
    }

    return i;
}
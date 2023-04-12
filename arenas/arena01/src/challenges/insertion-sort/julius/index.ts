type CompareFn<T> = (a: T, b: T) => number;

export const swap = <T>(arr: T[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
``;
export const insertionSort = <T>(arr: T[], cmp: CompareFn<T>): T[] => {
    const copy = [...arr];
    let i = 1;
    while (copy[i] !== undefined) {
        let j = i;
        while (j > 0 && cmp(copy[j - 1], copy[j]) > 0) {
            swap(copy, j - 1, j);
            j--;
        }
        i++;
    }
    return copy;
};

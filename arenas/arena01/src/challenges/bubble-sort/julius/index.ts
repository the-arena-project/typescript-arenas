type CompareFn<T> = (a: T, b: T) => number;
export const swap = <T>(arr: T[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

export const bubbleSort = <T>(arr: T[], cmp: CompareFn<T>): T[] => {
    const copy: T[] = [...arr];
    const length = copy.length;
    let i = 0;
    while (i < length - 1) {
        let j = 0;
        while (j < length - i - 1) {
            if (cmp(copy[j], copy[j + 1]) > 0) {
                swap(copy, j, j + 1);
            }
            j++;
        }
        i++;
    }
    return copy;
};

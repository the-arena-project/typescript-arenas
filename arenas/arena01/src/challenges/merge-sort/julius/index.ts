type CompareFn<T> = (a: T, b: T) => number;

export const slice = <T>(arr: T[], start?: number, end?: number) => {
    const length = arr.length;
    const s = start && start < 0 ? length + start : start ?? 0;
    const e = end && end < 0 ? length + end : end ?? length;

    const result: T[] = [];
    let y = 0;
    let i = s;

    while (i < e) {
        result[y] = arr[i];
        i++;
        y++;
    }

    return result;
};

const merge = <T>(left: T[], right: T[], cmp: CompareFn<T>): T[] => {
    const result: T[] = [];
    const leftLength = left.length;
    const rightLength = right.length;
    let leftIndex = 0;
    let rightIndex = 0;
    let resultIndex = 0;

    while (leftIndex < leftLength && rightIndex < rightLength) {
        if (cmp(left[leftIndex], right[rightIndex]) <= 0) {
            result[resultIndex] = left[leftIndex];
            leftIndex++;
        } else {
            result[resultIndex] = right[rightIndex];
            rightIndex++;
        }
        resultIndex++;
    }

    while (leftIndex < leftLength) {
        result[resultIndex] = left[leftIndex];
        leftIndex++;
        resultIndex++;
    }

    while (rightIndex < rightLength) {
        result[resultIndex] = right[rightIndex];
        rightIndex++;
        resultIndex++;
    }

    return result;
};

export const mergeSort = <T>(arr: T[], cmp: CompareFn<T>): T[] => {
    const length = arr.length;
    if (length <= 1) return slice(arr);
    const mid = ~~(length / 2);
    const left = slice(arr, 0, mid);
    const right = slice(arr, mid);
    const sortedLeft = mergeSort(left, cmp);
    const sortedRight = mergeSort(right, cmp);
    return merge(sortedLeft, sortedRight, cmp);
};

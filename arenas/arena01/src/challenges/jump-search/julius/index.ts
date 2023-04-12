type SearchFn = (arr: number[], value: number) => number | undefined;

function squareRoot(value: number): number {
    let low = 0;
    let high = value;
    while (low <= high) {
        const middle = ~~((low + high) / 2);

        if (middle * middle > value) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return high;
}

export const jumpSearch: SearchFn = (arr, value) => {
    let i = 0;
    const jump = squareRoot(arr.length);

    while (arr[i] !== undefined && arr[i] < value) {
        if (arr[i] === value) {
            return arr[i];
        } else {
            i += jump;
        }
    }

    const previous = i - jump;
    while (i > previous) {
        if (arr[i] === value) {
            return arr[i];
        }
        i--;
    }
};

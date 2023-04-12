type CallbackFn<T> = (elem: T) => boolean;
type FilterFn = <T>(arr: T[], cb: CallbackFn<T>) => T[];

export const filter: FilterFn = (arr, cb) => {
    const filtered = [] as typeof arr;
    let i = 0;

    while (i !== arr.length) {
        if (cb(arr[i])) {
            filtered.push(arr[i]);
        }

        ++i;
    }

    return filtered;
};

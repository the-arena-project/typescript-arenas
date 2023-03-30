type CallbackFn = <T>(elem: T) => boolean
type FindFn = <T>(arr: T[], cb: CallbackFn) => T | undefined

export const find: FindFn = (arr, cb) => {
    let i = 0;

    while (i !== arr.length) {
        if (cb(arr[i])) {
            return arr[i];
        }
        ++i;
    }

    return undefined;
}
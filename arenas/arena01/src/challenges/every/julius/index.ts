type CallbackFn = <T>(elem: T) => boolean;
type EveryFn = <T>(arr: T[], cb: CallbackFn) => boolean;

export const every: EveryFn = (arr, cb) => {
    let i = 0;

    while (i !== arr.length) {
        if (!cb(arr[i])) {
            return false;
        }

        ++i;
    }

    return true;
};

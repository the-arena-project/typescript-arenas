type CallbackFn = <T>(elem: T) => boolean;
type SomeFn = <T>(arr: T[], cb: CallbackFn) => boolean;

export const some: SomeFn = (arr, cb) => {
    let i = 0;

    while (i !== arr.length) {
        if (cb(arr[i])) {
            return true;
        }

        ++i;
    }

    return false;
};

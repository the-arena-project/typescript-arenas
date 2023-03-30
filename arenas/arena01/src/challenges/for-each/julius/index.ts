type CallbackFn = (elem: any) => void
type ForEachFn = (arr: any[], cb: CallbackFn) => void

export const forEach: ForEachFn = (arr, cb) => {
    let i = 0;

    while (i !== arr.length) {
        cb(arr[i++]);
    }
}
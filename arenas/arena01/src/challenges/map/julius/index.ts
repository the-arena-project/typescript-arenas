/* eslint-disable @typescript-eslint/no-explicit-any */
type CallbackFn = (elem: any) => any;
type MapFn = (arr: any[], cb: CallbackFn) => any[];

export const map: MapFn = (arr, cb) => {
    const mappedArr = new Array(arr.length);
    let i = 0;

    while (i !== arr.length) {
        mappedArr[i] = cb(arr[i]);
        ++i;
    }

    return mappedArr;
};

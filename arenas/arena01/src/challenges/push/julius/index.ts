type PushFn = (arr: any[], item: any) => void

export const push: PushFn = (arr, item) => {
    arr[arr.length] = item;
}
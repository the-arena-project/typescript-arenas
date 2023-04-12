// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PushFn = (arr: any[], item: any) => void;

export const push: PushFn = (arr, item) => {
    arr[arr.length] = item;
};

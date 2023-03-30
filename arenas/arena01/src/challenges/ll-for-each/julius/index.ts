type Link<T> = {
    data: T,
    next: Link<T>|null
};

type CallbackFn<T> = (elem: Link<T>, index: number) => void

type ForEachFn = <T> (
    list: Link<T> | null,
    cb: CallbackFn<T>,
) => void;

export const forEach: ForEachFn = (list, cb) => {
    let cur: typeof list = list;
    let i = 0;

    while (cur !== null) {
        cb(cur, i++);
        cur = cur.next;
    }
}
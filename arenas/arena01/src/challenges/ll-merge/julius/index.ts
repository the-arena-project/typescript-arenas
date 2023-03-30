type Link<T> = {
    data: T,
    next: Link<T>|null
};

type CallbackFn<T> = (elem: Link<T>, index: number) => void

type ForEachFn = <T> (
    list: Link<T> | null,
    cb: CallbackFn<T>,
) => void;

const forEach: ForEachFn = (list, cb) => {
    let cur: typeof list = list;
    let i = 0;

    while (cur !== null) {
        cb(cur, i++);
        cur = cur.next;
    }
}

type MergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T> | null

export const merge: MergeFn = (listA, listB) => {
    if (!listA) {
        return listB;
    }

    let cur = listA;

    while (cur.next !== null) {
        cur = cur.next;
    }

    cur.next = listB;

    return listA;
}
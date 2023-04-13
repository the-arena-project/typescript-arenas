type Link<T> = {
    data: T;
    next: Link<T> | null;
};

type CallbackFn<T> = (elem: Link<T>) => boolean;

type FindFn = <T>(list: Link<T> | null, cb: CallbackFn<T>) => Link<T> | undefined;

export const find: FindFn = (list, cb) => {
    let cur: typeof list = list;

    while (cur !== null) {
        if (cb(cur)) {
            return cur;
        }

        cur = cur.next;
    }

    return undefined;
};

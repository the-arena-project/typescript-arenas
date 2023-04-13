type ReverseFn = <T>(list: Link<T> | null) => Link<T> | null;

type Link<T> = {
    data: T;
    next: Link<T> | null;
};

export const reverse: ReverseFn = (list) => {
    const head = list;
    let cur = head;
    let prev: typeof list = null;

    while (cur !== null) {
        const next = cur.next;

        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
};

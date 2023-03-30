type Link<T> = {
    data: T,
    next: Link<T>|null
}

type CountFn = <T> (list: Link<T> | null) => number;

export const count: CountFn = (list) => {
    let i = 0;
    let cur = list;

    while (cur !== null) {
        cur = cur.next;
        ++i;
    }

    return i;
}

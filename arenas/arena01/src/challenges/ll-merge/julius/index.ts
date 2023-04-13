type Link<T> = {
    data: T;
    next: Link<T> | null;
};

type MergeFn = <T>(listA: Link<T> | null, listB: Link<T> | null) => Link<T> | null;

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
};

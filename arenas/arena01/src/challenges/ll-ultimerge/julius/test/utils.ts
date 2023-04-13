type Link<T> = {
    data: T;
    next: Link<T> | null;
};

export const makeList = <T>(...elements: T[]): Link<T> | null => {
    if (elements.length === 0) {
        return null;
    }

    let head: Link<T> | null = null;
    let cur: Link<T> | null = null;

    for (const element of elements) {
        const link = { data: element, next: null };

        if (cur === null) {
            head = link;
        } else {
            cur.next = link;
        }
        cur = link;
    }

    return head;
};

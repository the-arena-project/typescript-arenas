type Link<T> = {
    data: T;
    next: Link<T> | null;
};

type GetLastFn = <T>(list: Link<T>) => Link<T>;

export const getLast: GetLastFn = (list) => {
    let last = list;
    while (last.next) {
        last = last.next;
    }
    return last;
};

type PushFn = <T>(list: Link<T> | null, data: T) => Link<T>;
export const push: PushFn = (list, data) => {
    const newNode = { data, next: null };
    if (!list) {
        return newNode;
    }
    const last = getLast(list);
    last.next = newNode;
    return last.next;
};

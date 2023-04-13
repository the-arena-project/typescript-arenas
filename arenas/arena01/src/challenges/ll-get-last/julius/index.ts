type Link<T> = {
    data: T;
    next: Link<T> | null;
};

type GetLastFn = <T>(list: Link<T> | null) => Link<T> | null;

export const getLast: GetLastFn = (list) => {
    let last = list;

    while (last?.next) {
        last = last.next;
    }

    return last;
};

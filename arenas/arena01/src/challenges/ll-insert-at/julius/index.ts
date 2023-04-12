type Link<T> = {
    data: T;
    next: Link<T> | null;
};

type GetAtFn = <T>(list: Link<T> | null, index: number) => Link<T> | undefined;

export const getAt: GetAtFn = (list, index) => {
    if (!list || index < 0) {
        return undefined;
    }
    if (index === 0) {
        return list;
    }
    let next = list;
    let i = 0;
    while (next) {
        if (i === index) {
            return next;
        }
        if (!next.next) {
            return undefined;
        }
        next = next.next;
        i++;
    }
    return undefined;
};

type InsertAtFn = <T>(list: Link<T> | null, index: number, data: T) => Link<T> | undefined;

export const insertAt: InsertAtFn = (list, index, data) => {
    if (!list) {
        return index === 0 ? { data, next: null } : undefined;
    }

    const previousItem = getAt(list, index - 1);
    const item = getAt(list, index);

    if (!item) {
        return undefined;
    }
    const newNode = { data, next: item };

    if (previousItem) {
        previousItem.next = newNode;
    }

    return newNode;
};

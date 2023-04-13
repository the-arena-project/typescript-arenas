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

type DeleteAtFn = <T>(list: Link<T> | null, index: number) => Link<T> | undefined;

export const deleteAt: DeleteAtFn = (list, index) => {
    const [previousItem, item, nextItem] = [
        getAt(list, index - 1),
        getAt(list, index),
        getAt(list, index + 1),
    ];
    if (!item) {
        return undefined;
    }

    if (previousItem) {
        previousItem.next = nextItem || null;
    }

    return item;
};

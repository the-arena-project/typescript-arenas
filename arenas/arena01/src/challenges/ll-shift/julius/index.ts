type Link<T> = {
    data: T,
    next: Link<T>|null
}

type ShiftFn = <T> (list: Link<T> | null) => Link<T> | undefined;

export const shift: ShiftFn = (list) => {
    if (list?.next) {
        const next = list.next;

        list.next = null;

        return next;
    }

    return undefined;
}

type Link<T> = {
    data: T,
    next: Link<T>|null
}
type PopFn = <T> (list: Link<T> | null) => Link<T> | undefined

export const pop: PopFn = (list) => {
    if (!list) {
        return undefined;
    }

    let cur: typeof list | null = list;
    let prev: typeof list | null = null;
    
    while (cur.next !== null) {
        prev = cur;
        cur = cur.next;
    }
    
    if (prev !== null) {
        prev.next = null;
    }

    return cur;
}
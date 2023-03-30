type Link<T> = {
    data: T,
    next: Link<T>|null
};


type CallbackFn<T, R> = (elem: Link<T>, index: number) => R

type MapFn = <T, R> (
list: Link<T>| null,
cb: CallbackFn<T, R>,
) => Array<R>

export const map: MapFn = <T, R>(list: Link<T> | null, cb: CallbackFn<T, R>) => {
    const mapped: R[] = [];
    let cur: typeof list = list;
    let i  = 0;

    while (cur !== null) {
        mapped.push(cb(cur, i++));
        cur = cur.next;
    }

    return mapped;
}
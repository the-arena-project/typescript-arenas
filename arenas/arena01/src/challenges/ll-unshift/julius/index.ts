type Link<T> = {
    data: T,
    next: Link<T>|null
}
type CreateLinkFn = <T> (data: T) => Link<T>;

export const createLink: CreateLinkFn = (data) => {
    return {
        data,
        next: null,
    };
}

type UnshiftFn = <T> (list: Link<T> | null, data: T) => Link<T>;

export const unshift: UnshiftFn = (list, data) => {
    const newLink = createLink(data);
    newLink.next = list;
    return newLink;
}

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

type AddAfterFn = <T> (link: Link<T> | null, data: T) => Link<T>

export const addAfter: AddAfterFn = (link, data) => {
    const newLink = createLink(data);

    if (!link) {
        return newLink;
    }

    const oldNext = link.next;

    link.next = newLink;
    newLink.next = oldNext;

    return newLink;
}

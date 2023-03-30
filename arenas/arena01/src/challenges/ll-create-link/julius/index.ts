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

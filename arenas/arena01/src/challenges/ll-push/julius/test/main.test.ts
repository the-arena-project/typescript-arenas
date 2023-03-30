import { push } from '../index';

type Link<T> = {
    data: T,
    next: Link<T>|null
}

const genList = (count: number): Link<number> => {
    const links: Link<number>[] = new Array(count)
        .fill(1)
        .map((item, i) => ({
            data: i,
            next: null,
        }));
    for (let i = 0; i < links.length - 1; i++) {
        if (links[i + 1]) {
            links[i].next = links[i + 1];
        }
    }
    return links[0];
}

describe('push', () => {
    it('should create the list if does not exist', () => {
        const list = push(null, 1);
        expect(list).toEqual({ data: 1, next: null });
    });

    it('push multiple times', () => {
        const first = push(null, 1);
        const second = push(first, 2);
        const third = push(first, 3);

        expect(first).toEqual({
            data: 1,
            next: { data: 2, next: { data: 3, next: null }},
        });

        expect(first.next).toStrictEqual(second);
        expect(first.next?.next).toStrictEqual(third);
    });
});

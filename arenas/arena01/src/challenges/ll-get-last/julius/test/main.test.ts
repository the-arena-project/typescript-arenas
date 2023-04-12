import { getLast } from '../index';

type Link<T> = {
    data: T;
    next: Link<T> | null;
};

const genList = (count: number): Link<number> => {
    const links: Link<number>[] = new Array(count).fill(1).map((item, i) => ({
        data: i,
        next: null,
    }));
    for (let i = 0; i < links.length - 1; i++) {
        if (links[i + 1]) {
            links[i].next = links[i + 1];
        }
    }
    return links[0];
};

describe('getLast', () => {
    it('list containing a single link', () => {
        const list = { data: 1, next: null };
        expect(getLast(list)).toStrictEqual(list);
    });
    it('list containing many links', () => {
        const list = genList(4);

        expect(getLast(list)).toStrictEqual(list?.next?.next?.next);
    });

    it('should return null if the passed list is empty', () => {
        expect(getLast(null)).toBeNull();
    });
});

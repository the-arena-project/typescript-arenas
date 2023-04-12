import { shift } from '../index';

type Link<T> = {
    data: T;
    next: Link<T> | null;
};

type GetAtFn = <T>(list: Link<T>, index: number) => Link<T> | undefined;

export const ourGetAt: GetAtFn = (list, index) => {
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

describe('shift', () => {
    it('should return undefined', () => {
        const list = genList(1);
        const link = shift(list);
        expect(link).toStrictEqual(undefined);
    });

    it('should remove the link', () => {
        const list = genList(2);
        const expected = list.next;
        const newList = shift(list);
        expect(list.next).toStrictEqual(null);
        expect(newList).toEqual(expected);
    });

    it('should return undefined if the passed list is empty', () => {
        expect(shift(null)).toBeUndefined();
    });
});

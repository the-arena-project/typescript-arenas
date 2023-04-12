import { insertAt } from '../index';

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

describe('insertAt', () => {
    it('should return undefined if the index does not exist', () => {
        const list = { data: 300, next: null };
        expect(insertAt(list, 1, 42)).toStrictEqual(undefined);
    });

    it('should work at index 0', () => {
        const list = { data: 300, next: null };
        const newLink = insertAt(list, 0, 42);
        expect(newLink).toEqual({ data: 42, next: list });
    });

    it('should work at last index', () => {
        const list = genList(10);
        const lastItem = ourGetAt(list, 9) as Link<number>;
        const anteLastItem = ourGetAt(list, 8) as Link<number>;

        const newLink = insertAt(list, 9, 42);
        expect(anteLastItem.next).toStrictEqual(newLink);
        expect(newLink?.next).toStrictEqual(lastItem);
    });

    it('should return undefined if list is empty and index > 0', () => {
        expect(insertAt(null, 1, 21)).toBeUndefined();
    });

    it('should return the created node if list is empty and index === 0', () => {
        const inserted = insertAt(null, 0, 21);

        expect(inserted?.data).toEqual(21);
        expect(inserted?.next).toBeNull();
    });
});

import {deleteAt} from '../index';

type Link<T> = {
    data: T,
    next: Link<T>|null
}


type GetAtFn = <T> (list: Link<T>, index: number) => Link<T> | undefined;

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

describe('deleteAt', () => {
    it('should work with a single node', () => {
        const list = { data: 300, next: null };
        expect(deleteAt(list, 0)).toStrictEqual(list);
        expect(deleteAt(list, 1)).toStrictEqual(undefined);
    });

    it('should support negative numbers', () => {
        const list = { data: 300, next: null };
        expect(deleteAt(list, -1)).toEqual(undefined);
        expect(deleteAt(list, -10)).toEqual(undefined);
    });

    it('should not break the linked list', () => {
        const list = genList(100);
        const item10 = ourGetAt(list, 10);
        const item11 = ourGetAt(list, 11);
        const item12 = ourGetAt(list, 12);
        const item13 = ourGetAt(list, 13);

        expect(deleteAt(list, 11)).toStrictEqual(item11);
        expect(ourGetAt(list, 10)).toStrictEqual(item10);
        expect(ourGetAt(list, 11)).toStrictEqual(item12);
        expect(ourGetAt(list, 12)).toStrictEqual(item13);
    });

    it('should not break the linked list on the last element', () => {
        const list = genList(2);
        const item0 = ourGetAt(list, 0);
        const item1 = ourGetAt(list, 1);

        expect(deleteAt(list, 1)).toStrictEqual(item1);
        expect(ourGetAt(list, 0)).toStrictEqual(item0);
    });

    it('should return undefined if the passed list is empty', () => {
        expect(deleteAt(null, 0)).toBeUndefined();
    });
});

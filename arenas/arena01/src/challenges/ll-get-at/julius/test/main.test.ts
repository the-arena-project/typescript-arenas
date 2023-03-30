import {getAt} from '../index';

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

describe('getAt', () => {
    it('should return the correct link with a single node', () => {
        const list = { data: 300, next: null };
        expect(getAt(list, 0)).toStrictEqual(list);
    });

    it('should return the correct link', () => {
        const list = genList(3);
        expect(getAt(list, 0)).toStrictEqual(list);
        expect(getAt(list,1)).toStrictEqual(list.next);
        expect(getAt(list,2)).toStrictEqual(list.next!.next);
    });
    it('should work with heavy lists', () => {
        const list = genList(4000);
        expect(getAt(list,3000)).toStrictEqual(ourGetAt(list, 3000));
        expect(getAt(list,2000)).toStrictEqual(ourGetAt(list, 2000));
        expect(getAt(list,1000)).toStrictEqual(ourGetAt(list, 1000));
    });
    it('should return undefined', () => {
        const list = genList(3);
        expect(getAt(list, 3)).toEqual(undefined);
        expect(getAt(list,4)).toEqual(undefined);
        expect(getAt(list, 1000)).toEqual(undefined);
    });


    it('should return undefined if an empty list is passed', () => {
        expect(getAt(null, 0)).toBeUndefined();
    });
});

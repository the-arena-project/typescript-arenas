import { count } from '../index';

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

describe('count', () => {
    it('normal case', () => {
        const list = genList(4);
        expect(count<number>(list)).toEqual(4);
    });
    it('very long list', () => {
        const list = genList(40);
        expect(count<number>(list)).toEqual(40);
    });
    it('with a single node', () => {
        const list = genList(1);
        expect(count<number>(list)).toEqual(1);
    });

    it('should return 0 if list is empty', () => {
        expect(count(null)).toEqual(0);
    });
});

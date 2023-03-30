import { pop } from "../index";
import { makeList } from './utils';

describe('pop', () => {
    it('should return the first link of the list if the list\'s length is 1', () => {
        const list = makeList(21);

        expect(pop(list)).toBe(list);
    });

    it('should return and remove the last element of a list of two links', () => {
        const list = makeList(21, 42);
        const lastElement = list?.next;

        expect(list?.next).not.toBe(null);

        const poped = pop(list);

        expect(poped).toBe(lastElement);
        expect(list?.next).toBe(null);
    });

    it('should return undefined if the passed list is null', () => {
        expect(pop(null)).toBe(undefined);
    });

    it('should remove the last element of a very long list while preserving the whole list\'s integrity', () => {
        const MAX_VALUE = 1000;
        const values = Array.from({ length: MAX_VALUE }, (v, idx) => idx + 1);
        const list = makeList(...values);

        const poped = pop(list);

        expect(poped?.data).toEqual(MAX_VALUE);

        let cur: typeof list = list;
        let i = 1;

        while (cur) {
            expect(cur?.data).toEqual(i++);
            cur = cur.next;
        }

        expect(i).toEqual(MAX_VALUE);
    });
})

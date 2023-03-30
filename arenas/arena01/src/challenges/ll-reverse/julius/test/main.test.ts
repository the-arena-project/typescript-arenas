import { reverse } from '../index';
import { makeList } from './utils';

describe('reverse', () => {
    it('should not do anything if an empty list is passed', () => {
        expect(reverse(null)).toBe(null);
    });

    it('should properly reverse a simple list of two links', () => {
        const list = makeList(1, 2);
        const reversedList = reverse(list);

        expect(reversedList?.data).toEqual(2);
        expect(reversedList?.next?.data).toEqual(1);
    });

    it('should reverse a list made of only one element (should do nothing special)', () => {
        const list = makeList(21);
        const reversedList = reverse(list);

        expect(reversedList).toBe(list);
        expect(reversedList?.next).toBe(null);
    });

    it('should reverse a huge list', () => {
        const LIST_LENGTH = 10000;
        const insertedValues = Array.from({ length: LIST_LENGTH }, (el, idx) => idx + 1);
        const list = makeList(...insertedValues);
        const reversedList = reverse(list);

        let cur = reversedList;
        let i = LIST_LENGTH;

        for (; cur?.next; cur = cur?.next) {
            expect(cur.data).toEqual(i--)
        }

        expect(i).toEqual(1);
        expect(cur).toBe(list);
    });
});

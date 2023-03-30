import { addAfter } from '../index';

describe('addAfter', () => {
    it('should add a new link right after', () => {
        const head = { data: 'julius', next: null };
        const newLink = addAfter(head, 'is dead');

        expect(newLink).toEqual({
            data: 'is dead',
            next: null,
        });
        expect(head.next).toStrictEqual(newLink);
    });

    it('should not break the linked list', () => {
        const tail = { data: 'dead', next: null };
        const head = { data: 'julius', next: tail };

        const newLink = addAfter(head, 'is');

        expect(head.next).toStrictEqual(newLink);
        expect(head.next.next).toStrictEqual(tail);
    });

    it('should return the created link if the list is empty', () => {
        const list = addAfter(null, 21);

        expect(list?.data).toEqual(21);
    });
});

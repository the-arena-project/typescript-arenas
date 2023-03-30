import { unshift } from '../index';
import {makeList} from "./utils";

describe('unshift', () => {
    it('should add a new link in front', () => {
        const head = { data: 'julius', next: null };
        const newLink = unshift(head, 'hello');

        expect(newLink).toEqual({
            data: 'hello',
            next: head,
        });
        expect(newLink.next).toEqual(head);
    });

    it('should return the created element if list is empty', () => {
        const list = unshift(null, 21);

        expect(list.data).toEqual(21);
    });
});

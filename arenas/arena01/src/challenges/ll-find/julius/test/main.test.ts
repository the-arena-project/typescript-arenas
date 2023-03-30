import { find } from "../index";
import { makeList } from "./utils";

describe('find', () => {
    it('should find an element that is present and return it  it', () => {
        const list = makeList(1, 2, 3);
        const secondLink = list?.next;

        expect(find(list, ({ data }) => data === 2)).toEqual(secondLink);
    });

    it('should return undefined if element could not be found', () => {
        const list = makeList(1, 2, 3);

        expect(find(list, ({ data }) => data < 0)).toBe(undefined);
    });


    it('should not call the callback function if the list is empty', () => {
        const cb = jest.fn((el) => true);

        find(null, cb);

        expect(cb).not.toHaveBeenCalled();
    });
});

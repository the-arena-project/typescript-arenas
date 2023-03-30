import { merge } from "../index";
import { makeList } from "./utils";

describe('merge', () => {
    it('should merge two lists with at least one element each together', () => {
        const listA = makeList(1, 2, 3);
        const listB = makeList(4, 5);

        const merged = merge(listA, listB);

        expect(merged).toBe(listA);
        expect(merged?.next?.next?.next).toBe(listB);
    });

    it('should return listB if listA is null', () => {
        const listA = null;
        const listB = makeList(1, 2, 3);

        expect(merge(listA, listB)).toBe(listB);
    });


    it('should return listA if listB is null', () => {
        const listA = makeList(1, 2, 3);

        const merged = merge(listA, null);

        expect(merged).toBe(listA);
        expect(merged?.next?.next?.next).toBe(null);
    });
})

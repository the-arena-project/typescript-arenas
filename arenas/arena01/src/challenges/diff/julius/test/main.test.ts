import { diff } from "../index";

describe('diff', () => {
    it('should return all the elements in A that are not in B', () => {
        const diffed = diff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 10]);

        expect(diffed).toEqual([6, 7, 8, 9]);
    })

    it('should return an empty array if A and B are equal', () => {
        const diffed = diff([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

        expect(diffed).toEqual([]);
    })

    it('should return an empty array if both arrays are empty', () => {
        const diffed = diff([], []);

        expect(diffed).toEqual([]);
    })
})

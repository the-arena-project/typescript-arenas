import { ultimerge } from '../index';
import { makeList } from './utils';

describe('ultimerge', () => {
    it('should ultimerge two simple lists with two elements each', () => {
        const listA = makeList(1, 2);
        const listB = makeList(3, 4);
        const ultimerged = ultimerge(listA, listB);

        expect(ultimerged).toBe(listA);
        expect(ultimerged?.data).toEqual(1);
        expect(ultimerged?.next?.data).toEqual(3);
        expect(ultimerged?.next?.next?.data).toEqual(2);
        expect(ultimerged?.next?.next?.next?.data).toEqual(4);
    });

    it('should return null when trying to ultimerge two empty lists', () => {
        expect(ultimerge(null, null)).toBe(null);
    });

    it('should return listA if listB is empty', () => {
        const listA = makeList(1, 2);
        const ultimerged = ultimerge(listA, null);

        expect(ultimerged).toBe(listA);
        expect(ultimerged?.data).toBe(1);
        expect(ultimerged?.next?.data).toBe(2);
        expect(ultimerged?.next?.next).toBe(null);
    });

    it('should return listB if listA is empty', () => {
        const listB = makeList(1, 2);
        const ultimerged = ultimerge(null, listB);

        expect(ultimerged).toBe(listB);
        expect(ultimerged?.data).toBe(1);
        expect(ultimerged?.next?.data).toBe(2);
        expect(ultimerged?.next?.next).toBe(null);
    });

    it('should append last elements of listB in sequence if listB is longer than listA', () => {
        const listA = makeList(1, 2);
        const listB = makeList(3, 4, 5, 6);
        const ultimerged = ultimerge(listA, listB);

        expect(ultimerged).toEqual(listA);
        expect(ultimerged?.data).toEqual(1);
        expect(ultimerged?.next?.data).toEqual(3);
        expect(ultimerged?.next?.next?.data).toEqual(2);
        expect(ultimerged?.next?.next?.next?.data).toEqual(4);
        expect(ultimerged?.next?.next?.next?.next?.data).toEqual(5);
        expect(ultimerged?.next?.next?.next?.next?.next?.data).toEqual(6);
        expect(ultimerged?.next?.next?.next?.next?.next?.next).toBe(null);
    });

    it('should append last elements of listA in sequence if listA is longer than listB', () => {
        const listA = makeList(3, 4, 5, 6);
        const listB = makeList(1, 2);
        const ultimerged = ultimerge(listA, listB);

        expect(ultimerged).toBe(listA);
        expect(ultimerged?.data).toEqual(3);
        expect(ultimerged?.next?.data).toEqual(1);
        expect(ultimerged?.next?.next?.data).toEqual(4);
        expect(ultimerged?.next?.next?.next?.data).toEqual(2);
        expect(ultimerged?.next?.next?.next?.next?.data).toEqual(5);
        expect(ultimerged?.next?.next?.next?.next?.next?.data).toEqual(6);
        expect(ultimerged?.next?.next?.next?.next?.next?.next).toBe(null);
    });
});

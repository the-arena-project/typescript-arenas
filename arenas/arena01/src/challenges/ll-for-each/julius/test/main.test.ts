import { forEach } from '../index';
import { makeList } from './utils';

describe('forEach', () => {
    it('should execute the passed callback function on each element of a list (not testing the index parameter)', () => {
        const insertedValues = Array.from({ length: 100 }, (v, idx) => idx + 1);
        const head = makeList(...insertedValues);
        const arr = new Array(insertedValues.length).fill(0);

        let i = 0;

        forEach(head, (link) => (arr[i++] = link.data * 2));
        expect(arr).toEqual(insertedValues.map((n) => n * 2));
    });

    it('should execute the passed callback function on each element of a list (testing the index parameter)', () => {
        const insertedValues = Array.from({ length: 100 }, (v, idx) => idx + 1);
        const head = makeList(...insertedValues);
        const arr = new Array(insertedValues.length).fill(0);

        forEach(head, (link, idx) => (arr[idx] = link.data * 2));
        expect(arr).toEqual(insertedValues.map((n) => n * 2));
    });

    it('should never invoke the callback function if the list is empty', () => {
        const cb = jest.fn();

        forEach(null, cb);

        expect(cb).not.toHaveBeenCalled();
    });
});

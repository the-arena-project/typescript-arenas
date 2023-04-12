import { push } from '../index';

describe('push', () => {
    it('should add one element at the end of an array', () => {
        const arr = [1, 2, 3];

        push(arr, 4);

        expect(arr.at(-1)).toEqual(4);
    });

    it('should add the first element of the array', () => {
        const arr = [] as number[];

        push(arr, 42);
        expect(arr[0]).toEqual(42);
    });
});

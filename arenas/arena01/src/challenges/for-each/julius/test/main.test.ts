import { forEach } from '../index';

describe('forEach', () => {
    it('should iterate on each array element and execute the passed callback', () => {
        const arr = [1, 2, 3, 4, 5, -1, 2, 0, 2, 52, 123];
        const actualDoubled = [] as number[];
        let i = 0;

        forEach(arr, (el: number) => {
            actualDoubled[i++] = el * 2;
        });

        expect(actualDoubled).toEqual(arr.map((el) => el * 2));
    });
});

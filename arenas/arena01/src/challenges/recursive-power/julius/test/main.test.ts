import { recursivePower } from '../index';

describe('recursivePower', () => {
    it('should return 1 when power is 0', () => {
        const nb = 42;

        expect(recursivePower(nb, 0)).toEqual(nb ** 0);
    });

    it('should properly compute powers', () => {
        const testValues = [
            [1, 2],
            [3, 23],
            [4, 2],
            [21, 34],
            [12, 3],
            [1, 1],
            [3, 4],
            [43, 2],
            [2, 3],
        ];

        for (const [testedNb, testedPower] of testValues) {
            expect(recursivePower(testedNb, testedPower)).toEqual(testedNb ** testedPower);
        }
    });
});

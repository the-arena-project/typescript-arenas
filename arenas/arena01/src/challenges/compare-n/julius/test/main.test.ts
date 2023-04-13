import { compareN } from '../index';

describe('compareN', () => {
    it('should return the number of letters that differ for the n first characters where n <= min(s1.length, s2.length)', () => {
        const testValues = [
            {
                s1: 'hello',
                s2: 'habbo',
                n: 3,
                expected: 2,
            },
            {
                s1: 'haaa',
                s2: 'habb',
                n: 4,
                expected: 2,
            },
            {
                s1: 'hey',
                s2: 'yeh',
                n: 2,
                expected: 1,
            },
        ];

        for (const testValue of testValues) {
            const nDiff = compareN(testValue.s1, testValue.s2, testValue.n);

            expect(nDiff).toEqual(testValue.expected);
        }
    });

    it('should return the number of letters that differ for the n first characters where n > s1.length and n <= s2.length', () => {
        const testValues = [
            {
                s1: 'hello',
                s2: 'habbox',
                n: 6,
                expected: 4,
            },
            {
                s1: 'a',
                s2: 'ah',
                n: 2,
                expected: 1,
            },
            {
                s1: 'hey hey hey',
                s2: 'yeh yeh yeh yeh',
                n: 14,
                expected: 9,
            },
        ];

        for (const testValue of testValues) {
            const nDiff = compareN(testValue.s1, testValue.s2, testValue.n);

            expect(nDiff).toEqual(testValue.expected);
        }
    });

    it('should return the number of letters that differ for the n first characters where n <= s1.length and n > s2.length', () => {
        const testValues = [
            {
                s1: 'habbox',
                s2: 'hello',
                n: 6,
                expected: 4,
            },
            {
                s1: 'ah',
                s2: 'a',
                n: 2,
                expected: 1,
            },
            {
                s1: 'yeh yeh yeh yeh',
                s2: 'hey hey hey',
                n: 14,
                expected: 9,
            },
        ];

        for (const testValue of testValues) {
            const nDiff = compareN(testValue.s1, testValue.s2, testValue.n);

            expect(nDiff).toEqual(testValue.expected);
        }
    });
});

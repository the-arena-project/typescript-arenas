import { concatN } from "../index";

const refConcatN = (s: string, s2: string, n: number): string => [...s, s2.slice(0, n)].join('');

describe('concatN', () => {
    it('should concatenate s and the first n s2 characters where n <= s2.length', () => {
        const testValues = [
            {
                s: 'first string',
                s2: 'second string',
                n: 4
            },
            {
                s: 'first string',
                s2: 'second string',
                n: 0
            },
            {
                s: 'first string',
                s2: 'second string',
                n: 1
            },
            {
                s: '',
                s2: 'second string',
                n: 1
            },
            {
                s: 'hello',
                s2: 'world',
                n: 3
            }
        ];


        for (const testValue of testValues) {
            const refConcat = refConcatN(testValue.s, testValue.s2, testValue.n);
            const actualConcat = concatN(testValue.s, testValue.s2, testValue.n);

            expect(actualConcat).toEqual(refConcat);
        }
    });

    it('should concatenate s and the first n characters of s2 where n === s2.length', () => {
        const testValues = [
            {
                s: 'first string',
                s2: 'second string',
                n: 13
            },
            {
                s: 'first string',
                s2: 'hello',
                n: 5
            },
            {
                s: 'first string',
                s2: 'wo',
                n: 2
            },
            {
                s: '',
                s2: '',
                n: 0
            },
        ];

        for (const testValue of testValues) {
            const refConcat = refConcatN(testValue.s, testValue.s2, testValue.n);
            const actualConcat = concatN(testValue.s, testValue.s2, testValue.n);

            expect(actualConcat).toEqual(refConcat);
        }
    });

    it('should concatenate s and the first n characters of s2 where n > s2.length', () => {
        const testValues = [
            {
                s: 'first string',
                s2: 'second string',
                n: 42
            },
            {
                s: 'first string',
                s2: 'hello',
                n: 42
            },
            {
                s: 'first string',
                s2: 'wo',
                n: 42
            },
            {
                s: '',
                s2: '',
                n: 42
            },
        ];

        for (const testValue of testValues) {
            const refConcat = refConcatN(testValue.s, testValue.s2, testValue.n);
            const actualConcat = concatN(testValue.s, testValue.s2, testValue.n);

            expect(actualConcat).toEqual(refConcat);
        }
    })

});

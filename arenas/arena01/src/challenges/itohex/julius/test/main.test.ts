import { itohex } from '../index';

describe('itohex', () => {
    it('should parse positive zero (0 or +0)', () => {
        expect(itohex(0)).toEqual('0');
        expect(itohex(+0)).toEqual('0');
    });

    it('should parse negative zero (-0)', () => {
        expect(itohex(-0)).toEqual('-0');
    });

    it('should return a string holding the base-16 representation of the POSITIVE base-10 number passed as an argument', () => {
        const testValues = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 123, 212453, 42, 3243, 213, 3213,
            234567, 2345, 234, 2345, 21, 123456789, 123,
        ];

        for (const testValue of testValues) {
            expect(parseInt(itohex(testValue), 16)).toEqual(testValue);
        }
    });

    it('should return a string holding the base-16 representation of the NEGATIVE base-10 number passed as an argument', () => {
        const testValues = [
            -1,
            -2,
            -3,
            -4,
            -5,
            -6,
            -7,
            -8,
            -9,
            -10,
            -11,
            -12,
            -13,
            -14,
            -15 - 16,
            -2134,
            -324,
            -42,
            -2332456,
            -13245,
            -21345,
            -21344354312,
            -4356,
            -213,
            -324 - 123456789,
        ];

        for (const testValue of testValues) {
            expect(parseInt(itohex(testValue), 16)).toEqual(testValue);
        }
    });
});

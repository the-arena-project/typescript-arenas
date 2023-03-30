import { itobin } from "../index";

describe('itobin', () => {
    it('should parse positive zero (0 or +0)', () => {
        expect(itobin(0)).toEqual('0');
        expect(itobin(+0)).toEqual('0');
    });

    it('should parse negative zero (-0)', () => {
        expect(itobin(-0)).toEqual('-0');
    });

    it('should return a string holding the base-2 representation of the POSITIVE base-10 number passed as an argument', () => {
         const testValues = [
            123,
            212453,
            42,
            3243,
            213,
            3213,
            234567,
            2345,
            234,
            2345,
            21,
            123456789,
            123
         ];

         for (const testValue of testValues) {
            expect(parseInt(itobin(testValue), 2)).toEqual(testValue);
         }
    });

   it('should return a string holding the base-2 representation of the NEGATIVE base-10 number passed as an argument', () => {
         const testValues = [
            -1,
            -12,
            -2134,
            -324,
            -42,
            -2332456,
            -13245,
            -21345,
            -21344354312,
            -4356,
            -213,
            -324
            -123456789
         ];

         for (const testValue of testValues) {
            expect(parseInt(itobin(testValue), 2)).toEqual(testValue);
         }
    });
})

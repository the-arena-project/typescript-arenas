import { itoa } from "../index";

describe('itoa', () => {
    it('should parse 0', () => {
        expect(itoa(0)).toEqual('0');
        expect(itoa(+0)).toEqual('0');
    });

    /* this requires a specific check for -0 */
    it('should parse negative zero (-0)', () => {
        expect(itoa(-0)).toEqual('-0');
    });

    it('should parse positive numbers', () => {
        const testValues = [
            2134,
            23,
            232432,
            133,
            1212342546,
            1234,
            1232435,
            5695,
            32490,
            3243,
            233940,
            1329,
            1324,
            12,
            123456789
        ];

        for (const testValue of testValues) {
             expect(itoa(testValue)).toEqual(`${testValue}`);
        }
    });

    it('should parse negative numbers', () => {
        const testValues = [
            -2345,
            -12,
            -42,
            -324567,
            -3245,
            -32,
            -234567123,
            -234,
            -212,
            -11111111,
            -222222222,
            -12
            -123456789
        ];

        for (const testValue of testValues) {
             expect(itoa(testValue)).toEqual(`${testValue}`);
        }
    });
});

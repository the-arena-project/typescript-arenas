import { atoi } from '../index';

describe('atoi', () => {
    it('should return NaN if s is not a valid number', () => {
        const testValues = [
            '1213a',
            'a1234',
            '++12',
            '+-12',
            '--21223',
            '-23a',
            '+23b',
        ];

        for (const testValue of testValues) {
            expect(atoi(testValue)).toEqual(NaN);
        }
    })

    it('should return 0, -0 and +0 depending on the leading sign', () => {
        const testValues = [
            '+0',
            '-0',
            '0'
        ];

        for (const testValue of testValues) {
            expect(atoi(testValue)).toEqual(parseInt(testValue, 10));
        }
    });

    it('should parse valid positive string representations', () => {
        const testValues = [
            '2131223',
            '212435', 
            '12300',
            '2140',
            '2',
            '3',
            '5',
            '12',
            '234',
            '312431',
            '2131',
            '21'
        ];

        for (const testValue of testValues) {
            const parsed = atoi(testValue);
            
            expect(parsed).toEqual(parseInt(testValue, 10));
        }
    });

    it('should parse valid negative string representations', () => {
        const testValues = [
            '-1123',
            '-1',
            '-32456',
            '-21334534',
            '-21345231616',
            '-134235',
            '-21',
            '-2',
            '-3',
            '-7'
        ];
        
        for (const testValue of testValues) {
            const parsed = atoi(testValue);

            expect(parsed).toEqual(parseInt(testValue, 10));
        }
    });

    it('should parse number string representations with leading zeros', () => {
        const testValues = [
            '00000000000000',
            '00000110101',
            '0032400000',
            '01',
            '02',
            '00',
            '-00',
            '-0001',
            '-002',
            '-003',
            '000000000000000000001',
            '042',
            '-042',
        ];

        for (const testValue of testValues) {
            const parsed = atoi(testValue);

            expect(parsed).toEqual(parseInt(testValue, 10));
        }
    });
});
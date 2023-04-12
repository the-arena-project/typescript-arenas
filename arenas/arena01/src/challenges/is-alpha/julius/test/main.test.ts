import { isAlpha } from '../index';

describe('isAlpha', () => {
    it('should return true for strings only made of lower case letters', () => {
        const testValues = [
            'helloworld',
            'howareyou',
            'thearenaproject',
            'isoneofthebestproject',
            'yeahyeahyeah',
            's',
            'o',
            'zawarudo',
            'abcdefhijklmnopqrstuvwxyz',
        ];

        for (const testValue of testValues) {
            expect(isAlpha(testValue)).toEqual(true);
        }
    });

    it('should return true for strings only made of upper case letters', () => {
        const testValues = [
            'HELLOWORLD',
            'HOWAREYOU',
            'THEARENAPROJECT',
            'ISONEOFTHEBESTPROJECT',
            'YEAHYEAHYEAH',
            'S',
            'O',
            'ZAWARUDO',
            'ABCDEFHIJKLMNOPQRSTUVWXYZ',
        ];

        for (const testValue of testValues) {
            expect(isAlpha(testValue)).toEqual(true);
        }
    });

    it('should return true for strings only made of upper and lower case letters', () => {
        const testValues = [
            'HeLloWoRlD',
            'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefhijklmnopqrstuvwxyz',
            'abcdefG',
            'HgmnooqprUofkedw',
            'Amazing',
            'WoW',
            'AwEsOme',
        ];

        for (const testValue of testValues) {
            expect(isAlpha(testValue)).toEqual(true);
        }
    });

    it('should return false if the string contains anything else than a letter', () => {
        const testValues = [
            'Hellow0rld',
            'Hello world',
            '@awesome',
            'the_arena_project',
            '123456789',
            'ABCDEF-GHIJKLMNOPQRSTUVWZ',
            'int main() { return 0; }',
            'fuck u',
        ];

        for (const testValue of testValues) {
            expect(isAlpha(testValue)).toEqual(false);
        }
    });
});

import { isBigger } from '..';

const RANDOM_TESTS_COUNT = 16;

const getRandomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

describe('isBigger', () => {
    [
        { a: 0, b: 0, expected: false },
        { a: 1, b: 1, expected: false },
        { a: 2, b: 5, expected: false },
        { a: 5, b: 2, expected: true },
    ].forEach(({ a, b, expected }) => {
        it(`${a} > ${b} should be ${expected}`, () => {
            expect(isBigger(a, b)).toBe(expected);
        });
    });

    describe('random', () => {
        for (let i = 0; i < RANDOM_TESTS_COUNT; i++) {
            const a = getRandomInt(0, 1000);
            const b = getRandomInt(0, 1000);
            const expected = a > b;

            it(`${a} > ${b} should be ${expected}`, () => {
                expect(isBigger(a, b)).toBe(expected);
            });
        }
    });
});

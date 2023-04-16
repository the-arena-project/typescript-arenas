import { add } from '..';

const RANDOM_TESTS_COUNT = 16;

const getRandomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

describe('add', () => {
    [
        [0, 0, 0],
        [1, 1, 2],
        [2, 5, 7],
        [-3, -6, -9],
        [-2, 4, 2],
        [-7, 3, -4],
    ].forEach(([a, b, expected]) => {
        it(`${a} + ${b} should be ${expected}`, () => {
            expect(add(a, b)).toBe(expected);
        });
    });

    describe('random', () => {
        for (let i = 0; i < RANDOM_TESTS_COUNT; i++) {
            const a = getRandomInt(0, 1000);
            const b = getRandomInt(0, 1000);
            const expected = a + b;

            it(`${a} + ${b} should be ${expected}`, () => {
                expect(add(a, b)).toBe(expected);
            });
        }
    });
});

import { evenOrOdd } from '..';

const RANDOM_TESTS_COUNT = 16;

const getRandomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

describe('evenOrOdd', () => {
    [
        { age: 0, expected: 'Even' },
        { age: 1, expected: 'Odd' },
        { age: 2, expected: 'Even' },
        { age: 3, expected: 'Odd' },
    ].forEach(({ age, expected }) => {
        it(`${age} should be ${expected}`, () => {
            expect(evenOrOdd(age)).toBe(expected);
        });
    });

    describe('random', () => {
        for (let i = 0; i < RANDOM_TESTS_COUNT; i++) {
            const age = getRandomInt(4, 100);
            const expected = age % 2 === 0 ? 'Even' : 'Odd';

            it(`${age} should be ${expected}`, () => {
                expect(evenOrOdd(age)).toBe(expected);
            });
        }
    });
});

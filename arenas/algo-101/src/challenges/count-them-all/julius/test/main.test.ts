import { sum } from '..';

const RANDOM_TESTS_COUNT = 16;

const getRandomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomList = (): number[] => {
    const list: number[] = [];
    const length = getRandomInt(0, 20);
    for (let i = 0; i < length; i++) {
        list.push(getRandomInt(0, 1000));
    }
    return list;
};

const listToString = (list: number[]): string => `[${list.join(', ')}]`;

describe('sum', () => {
    [
        { list: [], expected: 0 },
        { list: [1, 2, 3], expected: 6 },
        { list: [6, 3, 9, 2, 12, 4, 6], expected: 42 },
    ].forEach(({ list, expected }) => {
        it(`${listToString(list)} should be ${expected}`, () => {
            expect(sum(list)).toBe(expected);
        });
    });

    describe('random', () => {
        for (let i = 0; i < RANDOM_TESTS_COUNT; i++) {
            const list = getRandomList();
            const expected = list.reduce((a, b) => a + b, 0);

            it(`${listToString(list)} should be ${expected}`, () => {
                expect(sum(list)).toBe(expected);
            });
        }
    });
});

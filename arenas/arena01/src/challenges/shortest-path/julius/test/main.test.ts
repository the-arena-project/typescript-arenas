import { shortestPath } from '../index';

describe('shortestPath', () => {
    it('single row - easy #1', () => {
        expect(shortestPath([0, 0], [1, 0], [[1, 1]])).toEqual(2);
    });
    it('single row - easy #2', () => {
        expect(shortestPath([0, 0], [1, 0], [[1, 1, 1, 1, 1, 1, 1]])).toEqual(2);
    });
    it('single row - easy #3', () => {
        expect(shortestPath([0, 0], [1, 0], [[1, 1, 0, 0, 0, 0, 0]])).toEqual(2);
    });
    it('multiple rows - easy #1', () => {
        expect(
            shortestPath(
                [0, 0],
                [1, 1],
                [
                    [1, 1],
                    [1, 1],
                ],
            ),
        ).toEqual(3);
    });
    it('multiple rows - medium #1', () => {
        expect(
            shortestPath(
                [0, 0],
                [1, 5],
                [
                    [1, 1],
                    [1, 1],
                    [1, 1],
                    [1, 1],
                    [1, 1],
                    [1, 1],
                ],
            ),
        ).toEqual(7);
    });
    it('multiple rows - medium #2', () => {
        expect(
            shortestPath(
                [0, 0],
                [3, 3],
                [
                    [1, 1, 1, 1, 1, 1],
                    [0, 1, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0, 1],
                    [0, 0, 0, 1, 1, 1],
                    [0, 0, 0, 0, 1, 1],
                ],
            ),
        ).toEqual(7);
    });
    it('multiple rows - harder #1', () => {
        expect(
            shortestPath(
                [0, 0],
                [3, 3],
                [
                    [1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1],
                ],
            ),
        ).toEqual(7);
    });
    it('multiple rows - harder #2', () => {
        expect(
            shortestPath(
                [1, 2],
                [0, 0],
                [
                    [1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 1, 0, 1],
                    [1, 1, 0, 1, 1, 1],
                    [1, 1, 1, 1, 0, 1],
                    [1, 1, 1, 1, 1, 1],
                ],
            ),
        ).toEqual(10);
    });
});

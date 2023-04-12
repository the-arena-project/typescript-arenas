import { avoidTheWarriors } from '../index';

describe('avoidTheWarriors', () => {
    it('should return 0 when there are no warriors on the runway', () => {
        const runway: [number, number][] = [
            [0, 0],
            [0, 0],
            [0, 0],
        ];
        const result = avoidTheWarriors(runway);
        expect(result).toBe(0);
    });

    it('should return 0 when there is only one warrior on the right', () => {
        const runway: [number, number][] = [
            [0, 0],
            [0, 1],
            [0, 0],
        ];
        const result = avoidTheWarriors(runway);
        expect(result).toBe(0);
    });

    it('should return 2 when there is only one warrior on the left', () => {
        const runway: [number, number][] = [
            [0, 0],
            [1, 0],
            [0, 0],
        ];
        const result = avoidTheWarriors(runway);
        expect(result).toBe(2);
    });

    it('should return the correct number of avoided warriors when there are multiple warriors on the runway', () => {
        const runway: [number, number][] = [
            [0, 0],
            [0, 1],
            [0, 0],
            [1, 0],
            [1, 0],
            [0, 0],
        ];
        const result = avoidTheWarriors(runway);
        expect(result).toBe(2);
    });
});

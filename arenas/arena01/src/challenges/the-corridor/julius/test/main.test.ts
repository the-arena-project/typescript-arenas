import { exitTheCorridor } from '../index';

describe('exitTheCorridor', () => {
    it('should return the correct value for [0, 0, 0, 0]', () => {
        const corridor = [0, 0, 0, 0];
        const result = exitTheCorridor(corridor);
        expect(result).toBe(4);
    });

    it('should return the correct value for [0]', () => {
        const corridor = [0];
        const result = exitTheCorridor(corridor);
        expect(result).toBe(1);
    });

    it('should return the correct value for []', () => {
        const corridor = [] as number[];
        const result = exitTheCorridor(corridor);
        expect(result).toBe(0);
    });

    it('should return the correct value for [0, 0, 4, 0, 0]', () => {
        const corridor = [0, 0, 4, 0, 0];
        const result = exitTheCorridor(corridor);
        expect(result).toBe(3);
    });

    it('should return the correct value for [0, 0, 10, 0, 0, 0, 8, 0, 0, 12, 0, 5, 0]', () => {
        const corridor = [0, 0, 10, 0, 0, 0, 8, 0, 0, 12, 0, 5, 0];
        const result = exitTheCorridor(corridor);
        expect(result).toBe(6);
    });
});

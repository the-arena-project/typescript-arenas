import { iterativeFactorial } from '../index';

const refFact = (n: number) => {
    let fact = 1;

    for (let i = 2; i <= n; ++i) {
        fact *= i;
    }

    return fact;
};

describe('iterativeFactorial', () => {
    it('should return 1 for 0!', () => {
        expect(iterativeFactorial(0)).toEqual(1);
    });

    it('should compute correct iterativeFactorials', () => {
        for (let i = 0; i !== 20; ++i) {
            expect(iterativeFactorial(i)).toEqual(refFact(i));
        }
    });
});

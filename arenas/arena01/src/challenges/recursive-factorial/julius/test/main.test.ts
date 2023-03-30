import { recursiveFactorial } from '../index'

const refFact = (n: number) => {
    let fact = 1;

   for (let i = 2; i <= n; ++i) {
    fact *= i;
   }

   return fact;
}

describe('factorial', () => {
    it('should return 1 for 0!', () => {
        expect(recursiveFactorial(0)).toEqual(1);
    });

    it('should compute correct factorials', () => {
        for (let i = 0; i !== 20; ++i) {
            expect(recursiveFactorial(i)).toEqual(refFact(i));
        }
    })
})

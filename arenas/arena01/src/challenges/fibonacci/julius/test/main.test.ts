import { fibonacci } from '../index';

function refFib(element: number) {
    const sequence = [0, 1];
    for (let i = 2; i <= element + 1; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[element - 1];
}

describe('fibonacci', () => {
    it('should return 0 when computing the first term', () => {
        expect(fibonacci(1)).toEqual(0);
    });

    it('should return 1 when computing the second term', () => {
        expect(fibonacci(2)).toEqual(1);
    });

    it('should return the sum of the two previous terms when computing the n-th term', () => {
        const testValues = [4, 3, 8, 10, 12, 14, 16, 22];

        for (const testValue of testValues) {
            expect(fibonacci(testValue)).toEqual(
                fibonacci(testValue - 1) + fibonacci(testValue - 2),
            );
        }
    });

    it('should return the right fibonacci terms', () => {
        for (let i = 1; i !== 25; ++i) {
            expect(fibonacci(i)).toEqual(refFib(i));
        }
    });
});

type FibonacciFn = (n: number) => number;

export const fibonacci: FibonacciFn = (n) => {
    if (n <= 2) {
        return n - 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

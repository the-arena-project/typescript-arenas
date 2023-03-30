type FactorialFn = (nb: number) => number

export const recursiveFactorial: FactorialFn = (n) => {
    if (n <= 1) {
        return 1;
    }
    
    return n * recursiveFactorial(n - 1);
}
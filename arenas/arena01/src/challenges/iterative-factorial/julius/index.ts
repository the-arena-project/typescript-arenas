export const iterativeFactorial = (n: number) => {
    let i = 1;
    let fact = 1;

    while (i <= n) {
        fact *= i;
        ++i;
    }

    return fact;
}

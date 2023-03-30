type PowerFn = (nb: number, power: number) => number;

export const iterativePower: PowerFn = (nb, power) => {
    let r = 1;
    let i = 0;

    while (i < power) {
        r *= nb;
        ++i;
    }

    return r;
}
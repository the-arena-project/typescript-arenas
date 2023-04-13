type PowerFn = (nb: number, power: number) => number;

export const recursivePower: PowerFn = (nb, power) => {
    if (power === 0) {
        return 1;
    }

    return nb * recursivePower(nb, power - 1);
};

type ItoaFn = (nb: number) => string

const getHowManyTimesItCanBeDividedBy = (n: number, divider: number) => {
    let i = 1;
    let nb = n;

    while (Math.trunc(nb /= divider) > 0 ) {
        ++i;
    }

    return i;
}

export const itoa: ItoaFn = (n) => {
    let isNegative = n < 0 || 1/n === -Infinity;
    let nb = Math.abs(n);
    const divisableBy = getHowManyTimesItCanBeDividedBy(nb, 10);
    const strLength = divisableBy + +isNegative;
    let i = strLength - 1;
    const str = new Array<string>(strLength);

    do {
        str[i--] = String.fromCharCode(nb % 10 + 48);
        nb = Math.trunc(nb / 10);
    } while (nb > 0)

    if (isNegative) {
        str[i] = '-';
    }

    return str.join('');
}

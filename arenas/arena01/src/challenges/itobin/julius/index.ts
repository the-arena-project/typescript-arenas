type ItoaFn = (nb: number) => string

const getDigitsCount = (nb: number) => {
    let i = 0;

    do {
        ++i;
    } while (Math.trunc(nb /= 2) > 0);
    
    return i;
}

export const itobin: ItoaFn = (n) => {
    const isNegative = n < 0 || 1/n === -Infinity;
    let nb = Math.abs(n);
    const digitCount = getDigitsCount(nb) + +isNegative;
    const str = new Array(digitCount);
    let i = digitCount - 1;
    
    do {
        str[i--] = String.fromCharCode(nb % 2 + 48);
    } while (Math.trunc(nb /= 2) > 0);

    if (isNegative) {
        str[i] = '-';
    }

    let s = '';
    for (const char of str) {
        s += char;
    }

    return s;
}
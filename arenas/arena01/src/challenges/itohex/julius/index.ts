type ItoaFn = (nb: number) => string;

const getDigitsCount = (nb: number) => {
    let i = 0;

    do {
        ++i;
    } while (Math.trunc((nb /= 16)) > 0);

    return i;
};

const HEX_CHARSET = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];

export const itohex: ItoaFn = (n) => {
    const isNegative = n < 0 || 1 / n === -Infinity;
    let nb = Math.abs(n);
    const digitCount = getDigitsCount(nb) + +isNegative;
    const str = new Array(digitCount);
    let i = digitCount - 1;

    do {
        str[i--] = HEX_CHARSET[Math.trunc(nb % 16)];
    } while (Math.trunc((nb /= 16)) > 0);

    if (isNegative) {
        str[i] = '-';
    }

    let s = '';
    for (const char of str) {
        s += char;
    }

    return s;
};

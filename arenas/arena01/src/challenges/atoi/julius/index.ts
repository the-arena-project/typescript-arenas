type AtoiFn = (str: string) => number;

export const atoi: AtoiFn = (s) => {
    let n = 0;
    let i = 0;
    let isNegative = false;

    if (s[i] === '+' || s[i] === '-') {
        if (s[i] === '-') {
            isNegative = true;
        }
        ++i;
    }

    for (; i !== s.length; ++i) {
        const digit = s[i].charCodeAt(0);

        if (!(digit >= '0'.charCodeAt(0) && digit <= '9'.charCodeAt(0))) {
            return NaN;
        }

        n = n * 10 + s[i].charCodeAt(0) - 48;
    }

    return isNegative ? -n : n;
};

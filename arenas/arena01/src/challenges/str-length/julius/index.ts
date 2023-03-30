type StrLengthFn = (str: string) => number

export const strLength: StrLengthFn = (s) => {
    let i = 0;

    while (typeof s[i] !== 'undefined') {
        ++i;
    }

    return i;
}
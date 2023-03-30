type SplitFn = (str: string) => string[]

type StrLengthFn = (str: string) => number

const strLength: StrLengthFn = (s) => {
    let i = 0;

    while (typeof s[i] !== 'undefined') {
        ++i;
    }

    return i;
}

export const split: SplitFn = (s) => {
    const len = strLength(s);
    const arrayified: string[] = new Array(len);
    let i = 0;

    while (i !== len) {
        arrayified[i] = s[i];
        ++i;
    }

    return arrayified;
}
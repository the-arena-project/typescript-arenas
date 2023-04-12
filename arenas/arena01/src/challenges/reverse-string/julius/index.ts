type ReverseStringFn = (str: string) => string;

const arrayRoughJoin = (arr: string[]): string => {
    let s = '';
    let i = 0;

    while (i !== arr.length) {
        s = `${s}${arr[i++]}`;
    }

    return s;
};

export const reverseString: ReverseStringFn = (str) => {
    let i = 0,
        j = str.length - 1;
    let tmp = '';
    const reversedStr = [...str];

    while (i < j) {
        tmp = reversedStr[i];
        reversedStr[i++] = str[j];
        reversedStr[j--] = tmp;
    }

    return arrayRoughJoin(reversedStr);
};

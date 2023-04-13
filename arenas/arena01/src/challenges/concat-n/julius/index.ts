type ConcatNFn = (strA: string, strB: string, n: number) => string;

export const concatN: ConcatNFn = (strA, strB, n) => {
    let concatenated = strA;
    let i = 0;

    while (i < n && i < strB.length) {
        concatenated += strB[i++];
    }

    return concatenated;
};

type CompareNFn = (
strA: string,
strB: string,
n: number
) => number

export const compareN: CompareNFn = (strA, strB, n) => {
    let i = 0;
    let differCount = 0;

    while ((i < strA.length || i < strB.length) && i < n) {
        if (strA[i] !== strB[i]) {
            ++differCount;
        }

        ++i;
    }

    return differCount;
}
type IsAlphaFn = (str: string) => boolean;

export const isAlpha: IsAlphaFn = (str) => {
    let i = 0;
    const lowerCaseRange = { lower: 'a'.charCodeAt(0), upper: 'z'.charCodeAt(0) };
    const upperCaseRange = { lower: 'A'.charCodeAt(0), upper: 'Z'.charCodeAt(0) };

    while (i !== str.length) {
        const charCode = str.charCodeAt(i);

        if (
            !(
                (charCode >= lowerCaseRange.lower && charCode <= lowerCaseRange.upper) ||
                (charCode >= upperCaseRange.lower && charCode <= upperCaseRange.upper)
            )
        ) {
            return false;
        }
        ++i;
    }

    return true;
};

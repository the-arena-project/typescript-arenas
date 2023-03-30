type ReverseNumbersFn = (numbers: number[]) => number[]

export const reverseNumbers: ReverseNumbersFn = (numbers) => {
    const reversed = [...numbers];
    let i = 0, j = numbers.length - 1;

    while (i < j) {
        reversed[i] = numbers[j];
        reversed[j--] = numbers[i++];
    }

    return reversed;
}
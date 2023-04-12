type PrintNumberFn = (nbr: number) => void;

export const printNumber: PrintNumberFn = (nbr) => {
    process.stdout.write(`${nbr}`);
};

type PrintStringFn = (str: string) => void;

export const printString: PrintStringFn = (s) => {
    process.stdout.write(`${s}\n`);
};

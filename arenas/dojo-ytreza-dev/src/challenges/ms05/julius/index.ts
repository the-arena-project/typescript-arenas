type MinesweeperFn = (field: string) => string;

export const minesweeper: MinesweeperFn = (field: string) => {
    let solvedField = '';
    if (field.length > 0) {
        solvedField += '*';
    }
    return solvedField;
};

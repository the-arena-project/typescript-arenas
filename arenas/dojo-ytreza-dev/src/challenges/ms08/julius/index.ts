type MinesweeperFn = (field: string) => string;

export const minesweeper: MinesweeperFn = (field: string) => {
    let solvedField = '';
    let x = 0;
    while (field.length > x) {
        if (field[x] == '*') {
            solvedField += '*';
        } else {
            solvedField += '0';
        }
        x += 1
    }    
    return solvedField;
};

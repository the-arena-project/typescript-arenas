type MinesweeperFn = (field: string) => string

export const minesweeper : MinesweeperFn = (field: string) => {
    let solvedField : string = ""
    if (field.length > 0) {
        if (field[0] == "*")         {
            solvedField += "*"
        } else {
            solvedField += "0"
        }
    }
    return solvedField
}


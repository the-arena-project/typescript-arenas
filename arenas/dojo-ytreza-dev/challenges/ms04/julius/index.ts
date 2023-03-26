type MinesweeperFn = (field: string) => string

export const minesweeper : MinesweeperFn = (field: string) => {
    const solvedField : string = ""
    if (field.length > 0) {
        solvedField += "0"
    }
    return solvedField
}


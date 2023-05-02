type MinesweeperFn = (field: string) => string;

export const minesweeper: MinesweeperFn = (field: string) => {
    const rows = field.split("\n")
    let solvedRows : string[] = []
    let y = 0
    while (rows.length > y) {
        solvedRows.push(solveRow(rows, y))
        y ++
    }

    return solvedRows.join("\n")
}

function solve_cell(rows: string[], x: number,  y: number) {
    if (isMine(rows, x, y)) {
        return "*"
    } 
    
    return countMinesAroundCell(rows, x, y)
}

function countMinesAroundCell(rows: string[], x: number, y: number) {
    let numberOfMines = 0
    
    if (isMine(rows, x - 1, y - 1)) {
        numberOfMines++
    }

    if (isMine(rows, x - 1, y)) {
        numberOfMines++
    }

    if (isMine(rows, x - 1, y + 1)) {
        numberOfMines++
    }    

    if (isMine(rows, x, y - 1)) {
        numberOfMines++
    }

    if (isMine(rows, x, y + 1)) {
        numberOfMines++
    }

    if (isMine(rows, x + 1, y - 1)) {
        numberOfMines++
    }

    if (isMine(rows, x + 1, y)) {
        numberOfMines++
    }
    
    if (isMine(rows, x + 1, y + 1)) {
        numberOfMines++
    }


    return numberOfMines
}

function isMine(rows: string[], x: number, y: number) {
    if (y < 0) {
        return false
    }

    if (y >= rows.length) {
        return false
    }

    return rows[y][x] == "*"
}

function solveRow(rows: string[], y: number) {
    let x = 0
    let solvedField = ""
    while (rows[y].length > x) {
        solvedField += solve_cell(rows, x, y)
        x++
    }

    return solvedField
}


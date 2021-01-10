function generateEmptySudoku() {
    const result = {
        rows: []
    };

    for (let i = 0; i < 9; ++i) {
        const row = { cols: [], index: i };

        for (let j = 0; j < 9; j++) {
            const col = { value: null, row: i, col: j };
            row.cols.push(col);
        }
    
        result.rows.push(row);
    }

    return result;
}

function updateSudoku(current_sudoku, e) {
    current_sudoku.rows[e.row].cols[e.col].value = e.value;
    return current_sudoku;
}

function checkValid(sudoku){
    // check if there are repeating values in row
    for (let n = 0; n < 9; ++n) {
        for (let i = 0; i < 9; ++i) {
            const val = sudoku.rows[n].cols[i].value;
            if (val != null) {
                for (let j = i + 1; j < 9; ++j) { 
                    if (val === sudoku.rows[n].cols[j].value)
                    {
                        console.log("row", val, sudoku.rows[n].cols[j].value);
                        return false;
                    }
                }
            }
        }
    }

    // check if there are repeating values in column
    for (let n = 0; n < 9; ++n) {
        for (let i = 0; i < 9; ++i) {
            const val = sudoku.rows[i].cols[n].value;
            if (val != null) {
                for (let j = i + 1; j < 9; ++j) { 
                    if (val === sudoku.rows[j].cols[n].value)
                    {
                        console.log("col", val, sudoku.rows[j].cols[n].value);
                        return false;
                    }
                }
            }
        }
    }

    // check if there is a repeating a value in a square
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const check_duplicates = [];
            for (let y = i; y < i + 3; ++y) {
                for (let x = j; x < j + 3; ++x) {
                    const current_val = sudoku.rows[x].cols[y].value;
                    if (check_duplicates.includes(current_val)) {
                        return false;
                    } else if (current_val !== null) {
                        check_duplicates.push(current_val);
                    }
                }
            }
        }
    }

    return true
}

function possible(sudoku, x, y, n) {
    for (let i = 0; i < 9; ++i) {
        if (sudoku.rows[y].cols[i].value == n) {
            return false;
        }
    }

    for (let i = 0; i < 9; ++i) {
        if (sudoku.rows[i].cols[x].value == n) {
            return false;
        }
    }

    const x0 = Math.floor(x / 3) * 3;
    const y0 = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (sudoku.rows[y0+i].cols[x0+j].value == n) {
                return false;
            }
        }
    }

    return true;
}

function solveSudoku(sudoku) {
    if (checkValid(sudoku)) {
        /*
        for (let i = 0; i < 9; ++i) {
            for (let j = 0; j < 9; ++j) {
                if (sudoku.rows[i].cols[j].value === null) {
                    for (let n = 1; n < 10; ++n) {
                        if (possible(sudoku, i, j, n)) {
                            sudoku.rows[i].cols[j].value = n;
                            solveSudoku(sudoku);
                        } else {
                            console.log(i, j, n);
                        }
                    }
                    return;
                }
            }
        //}
        */
    } else { 
        alert("Sudoku is not valid");
    }

    return sudoku;
}

export { generateEmptySudoku, updateSudoku, solveSudoku };

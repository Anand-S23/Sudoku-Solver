import React, { Component } from "react";
import Cell from "./Cell";

class Board extends Component {
    render() {
        const { sudoku, onChange } = this.props;

        return (
            <div>
                { sudoku.rows.map((row) => (
                    <div className="row" key={ row.index }>
                        { row.cols.map((field) => (
                            <Cell 
                                field={ field } 
                                key={ field.col } 
                                onChange={ onChange } 
                            />
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Board;

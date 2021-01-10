import React, { Component } from "react";
import { generateEmptySudoku, updateSudoku, solveSudoku } from "./lib/sudoku";
import Board from "./components/Board";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sudoku: generateEmptySudoku()
    }
  }

  handleChange = (e) => {
    this.setState(
      {  sudoku: updateSudoku(this.state.sudoku, e) }
    );
  }

  solve = (e) => {
    this.setState(
      { sudoku: solveSudoku(this.state.sudoku) }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Sudoku Solver</h1>
        <Board 
          sudoku={ this.state.sudoku } 
          onChange={ this.handleChange }
        />

        <button onClick={ this.solve }> Solve </button>
      </div>
    );
  }
}

export default App;

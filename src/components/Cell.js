import React, { Component } from "react";

class Cell extends Component {
  handleChange = (e) => {
    let int_val = parseInt(e.target.value, 10);
    if (int_val === 0) {
        int_val = "Range is 1-9";
    }
    const value = isNaN(int_val) ? "" : int_val;
    this.props.onChange({ ...this.props.field, value: value });
  };

  render() {
    const { field } = this.props;
    return (
      <input
        className="field"
        value={ field.value }
        onChange={ this.handleChange }
        maxLength="1"
      />
    );
  }
}

export default Cell;
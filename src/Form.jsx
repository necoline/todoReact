import React, { Component } from "react";

class Form extends Component {
  state = {
    inputText: ""
  };

  handleChange = event => {
    const inputText = event.target.value;
    this.setState({ inputText });
  };

  sendItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.inputText);
    this.setState({ inputText: "" });
  };

  render() {
    return (
      <form onSubmit={this.sendItem}>
        <input
          type="text"
          placeholder="add an item"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default Form;

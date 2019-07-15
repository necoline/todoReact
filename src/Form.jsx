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
  };

  render() {
    return (
      <form onSubmit={this.sendItem}>
        <input
          type="text"
          placeholder="add an item"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default Form;

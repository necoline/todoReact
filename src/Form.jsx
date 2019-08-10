import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: 0,
  };

  handleChange = ({target}) => {
    this.setState({ [target.id]: target.value });
  };

  sendItem = event => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({ 
      firstName: "",
      lastName: "",
      phoneNumber: 0,
   });
  };

  render() {
    return (
      <form onSubmit={this.sendItem}>
        <input
          type="text"
          placeholder="add first name"
          value={this.state.firstName}
          id={"firstName"}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="add last name"
          value={this.state.lastName}
          id={"lastName"}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="add a phone number"
          value={this.state.phoneNumber}
          id={"phoneNumber"}
          onChange={this.handleChange}
        />
        <button type="submit">ADD</button>
      </form>
    );
  }
}

export default Form;

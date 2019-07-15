import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class ToDoList extends Component {
  state = {
    list: ["water", "tomatoes", "wheat"]
  };

  // add to the list
  addItem = newItem => {
    this.state.list.push(newItem);
    this.setState({ list: this.state.list });
  };

  // remove items from the list
  removeItem = item => {
    // new array without the item
  };

  render() {
    return (
      <div>
        <Form addItem={this.addItem} />
        <List removeItem={this.removeItem} shoppingList={this.state.list} />
      </div>
    );
  }
}

export default ToDoList;

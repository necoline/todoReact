import React, { Component } from "react";
import List from "./List";

class ToDoList extends Component {
  state = {
    list: ["water", "tomatoes", "wheat"]
  };
  // list
  // add to the list
  // remove items from the list

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>ADD</button>
        </form>
        <List shoppingList={this.state.list} />
      </div>
    );
  }
}

export default ToDoList;

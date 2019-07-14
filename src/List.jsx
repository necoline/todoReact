import React, { Component } from "react";
import "./List.css";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.shoppingList.map(listItem => (
          <li className="list-item">{listItem}</li>
        ))}
      </ul>
    );
  }
}

export default List;

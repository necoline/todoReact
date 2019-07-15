import React, { Component } from "react";
import "./List.css";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.shoppingList.map(listItem => (
          <li key={listItem} className="list-item">
            {listItem}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;

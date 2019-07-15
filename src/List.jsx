import React, { Component } from "react";
import "./List.css";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.shoppingList.map(listItem => (
          <div key={listItem}>
            <input
              type="checkbox"
              value="completed"
              onClick={event => this.props.removeItem(listItem)}
            />
            <li className="list-item">{listItem}</li>
          </div>
        ))}
      </ul>
    );
  }
}

export default List;

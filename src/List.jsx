import React, { Component } from "react";

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

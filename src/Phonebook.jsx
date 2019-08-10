import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import api from './apis'

class Phonebook extends Component {
  state = {
    list: [],
    isLoading: false
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllContacts().then(contacts => {
        this.setState({
            contacts: contacts.data.data,
            isLoading: false,
        })
    })
}

  // add to the list
  addContact = async(contact) => {
    await api.addContact(contact).then(res => {
        console.log('res', res)
        this.state.contacts.push(contact);
        this.setState({ contacts: this.state.contacts });
    })
  };

  // add to the list
  addItem = newItem => {
    this.state.list.push(newItem);
    this.setState({ list: this.state.list });
  };

  // remove items from the list
  removeItem = item => {
    const newList = this.state.list.filter(listItem => listItem !== item);
    this.setState({ list: newList });
  };

  render() {
    return (
      <div>
        <Form addContact={this.addContact} />
        <List removeItem={this.removeItem} shoppingList={this.state.list} />
      </div>
    );
  }
}

export default Phonebook;

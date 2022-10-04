import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Wraper, Title, ContactTitle } from 'components/App/App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();
    this.state.contacts.map(contact => contact.name).includes(name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, { name, number, id: nanoid() }],
          };
        });
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };
  handleDelete = event => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== event.target.id
        ),
      };
    });
  };

  render() {
    return (
      <Wraper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleSubmit} />
        <ContactTitle>Contacts</ContactTitle>
        <Filter handleChange={this.handleChange} value={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleDelete={this.handleDelete}
        />
      </Wraper>
    );
  }
}

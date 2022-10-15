import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Wraper, Title, ContactTitle } from 'components/App/App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();

    contacts.map(contact => contact.name).includes(name)
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState => {
          return [...prevState, { name, number, id: nanoid() }];
        });
  };

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const handleDelete = event => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== event.target.id);
    });
  };

  return (
    <Wraper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleSubmit} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter handleChange={handleChange} value={filter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDelete={handleDelete}
      />
    </Wraper>
  );
};

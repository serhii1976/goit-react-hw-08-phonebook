import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  return (
    <ContactsList>
      {contacts.items
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.value.toLowerCase())
        )
        .map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </ContactsList>
  );
};

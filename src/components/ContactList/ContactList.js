import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  return (
    <ul>
      {contacts.items
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.value.toLowerCase())
        )
        .map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

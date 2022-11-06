import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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

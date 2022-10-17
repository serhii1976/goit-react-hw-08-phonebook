import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = props => {
  const { contacts, filter, handleDelete } = props;
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

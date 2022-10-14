import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactButton,
} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = props => {
  const { contacts, filter, handleDelete } = props;
  return (
    <>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            <ContactButton type="button" id={contact.id} onClick={handleDelete}>
              Delete
            </ContactButton>
          </ContactItem>
        ))}
    </>
  );
};
ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};

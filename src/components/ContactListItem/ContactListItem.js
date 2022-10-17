import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactButton,
} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = props => {
  const { contact, handleDelete } = props;
  return (
    <ContactItem>
      {contact.name}: {contact.number}
      <ContactButton type="button" id={contact.id} onClick={handleDelete}>
        Delete
      </ContactButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.node.isRequired,
  }),
  handleDelete: PropTypes.func.isRequired,
};

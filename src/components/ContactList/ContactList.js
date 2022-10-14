import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export const ContactList = props => {
  const { contacts, filter, handleDelete } = props;
  return (
    <ul>
      <ContactListItem
        contacts={contacts}
        filter={filter}
        handleDelete={handleDelete}
      />
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

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactButton,
} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItem>
      <span>
        {name}: <a href="tel:{number}">{number}</a>
      </span>
      <ContactButton type="button" id={id} onClick={handleDelete}>
        Delete
      </ContactButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

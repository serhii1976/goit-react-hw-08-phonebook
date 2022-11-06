import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
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
      {name}: {number}
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
    number: PropTypes.node.isRequired,
  }),
};

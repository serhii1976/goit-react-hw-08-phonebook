import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactButton,
} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItem>
      {name}: {phone}
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
    phone: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

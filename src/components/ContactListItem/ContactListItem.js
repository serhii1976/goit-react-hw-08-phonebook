import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactButton,
} from 'components/ContactListItem/ContactListItem.styled';

export class ContactListItem extends Component {
  render() {
    return (
      <>
        {this.props.contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
          )
          .map(contact => (
            <ContactItem key={contact.id}>
              {contact.name}: {contact.number}
              <ContactButton
                type="button"
                id={contact.id}
                onClick={this.props.handleDelete}
              >
                Delete
              </ContactButton>
            </ContactItem>
          ))}
      </>
    );
  }
}
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

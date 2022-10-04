import React, { Component } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        <ContactListItem
          contacts={this.props.contacts}
          filter={this.props.filter}
          handleDelete={this.props.handleDelete}
        />
      </ul>
    );
  }
}
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

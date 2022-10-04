import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  InputTitle,
  InputField,
  ButtonAdd,
} from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.onSubmit}>
          <InputTitle>Name</InputTitle>
          <InputField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <InputTitle>Number</InputTitle>
          <InputField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </Form>
      </>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

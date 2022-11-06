import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Wraper, Title, ContactTitle } from 'components/App/App.styled';

export const App = () => {
  return (
    <Wraper>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </Wraper>
  );
};

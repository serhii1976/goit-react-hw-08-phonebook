import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';

import { Wraper, Title, ContactTitle } from './contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wraper>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </Wraper>
  );
}

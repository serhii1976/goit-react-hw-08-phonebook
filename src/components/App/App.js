import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Wraper, Title, ContactTitle } from 'components/App/App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wraper>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <br></br>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Wraper>
  );
};

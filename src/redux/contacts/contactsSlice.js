import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { addContact, deleteContact, fetchContacts } from './operations';

const extraActions = [addContact, deleteContact, fetchContacts];

const getActionsWithType = type => extraActions.map(action => action[type]);

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactSuccessReducer = (state, action) => {
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const logOutSuccessReduser = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anySuccessReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addCase(logOut.fulfilled, logOutSuccessReduser)

      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('rejected')),
        anyRejectedReducer
      )
      .addMatcher(
        isAnyOf(...getActionsWithType('fulfilled')),
        anySuccessReducer
      ),
});

export const contactsReduser = contactsSlice.reducer;


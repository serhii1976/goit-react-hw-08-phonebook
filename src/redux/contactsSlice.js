import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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

      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('rejected')),
        anyRejectedReducer
      )
      .addMatcher(
        isAnyOf(...getActionsWithType('fulfilled')),
        anySuccessReducer
      ),

  // const handlePending = state => {
  //   state.isLoading = true;
  // };

  // const handleRejected = (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // };

  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload.id
  //     );
  //   },
  //   [deleteContact.rejected]: handleRejected,
  // },
});

export const contactsReduser = contactsSlice.reducer;

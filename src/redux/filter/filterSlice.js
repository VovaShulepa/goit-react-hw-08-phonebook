import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact } from 'redux/contacts/operations';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterContact(state, { payload }) {
      return payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(addContact.fulfilled, () => '');
    builder.addCase(deleteContact.fulfilled, () => '');
  },
});

export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

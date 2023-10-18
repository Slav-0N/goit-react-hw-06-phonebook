import { createSlice } from '@reduxjs/toolkit';

export const changeContactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => void state.push(action.payload),
    deleteContact: (state, action) =>
      state.filter(el => el.id !== action.payload),
  },
});

export const { addContact, deleteContact } = changeContactSlice.actions;

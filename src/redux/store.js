import { configureStore } from '@reduxjs/toolkit';
import { addNameSlice } from './createSliceName';
import { addNumberSlice } from './createSliceNumber';
import { changeContactSlice } from './createSliceContacts';
import { addFilterSlice } from './createSliceFilter';

export const store = configureStore({
  reducer: {
    contacts: changeContactSlice.reducer,
    filter: addFilterSlice.reducer,
    name: addNameSlice.reducer,
    number: addNumberSlice.reducer,
  },
});

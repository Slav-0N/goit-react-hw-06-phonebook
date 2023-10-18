import { configureStore } from '@reduxjs/toolkit';
import { addNameSlice } from './createSliceName';
import { addNumberSlice } from './createSliceNumber';
import { changeContactSlice } from './createSliceContacts';
import { addFilterSlice } from './createSliceFilter';

// import { contactReducer } from './reducer';

// import {
//   contactReducer,
//   nameReducer,
//   numberReducer,
//   filterReducer,
// } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: changeContactSlice.reducer,
    // contacts: contactReducer,

    filter: addFilterSlice.reducer,
    name: addNameSlice.reducer,
    number: addNumberSlice.reducer,
  },
});

console.log(addNameSlice);

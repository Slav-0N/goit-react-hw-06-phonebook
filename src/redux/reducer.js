// import { statusFilters } from './constants';
// import { createReducer } from '@reduxjs/toolkit';
// import {
//   addContact,
//   setFilter,
//   addName,
//   addNumber,
//   deleteContact,
//   filteredContacts,
// } from './actions';

// const initialState = {
//   contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
//   filter: '',
//   name: '',
//   number: '',
// };

// export const contactReducer = createReducer(initialState.contacts, {
//   [addContact]: (state, action) => void state.push(action.payload),
//   [deleteContact]: (state, action) =>
//     state.filter(el => el.id !== action.payload),
//   [filteredContacts]: (state, action) => state - action.payload,
// });

// export const nameReducer = createReducer(initialState.name, {
//   [addName]: (state, action) => action.payload,
// });

// export const numberReducer = createReducer(initialState.number, {
//   [addNumber]: (state, action) => action.payload,
// });

// export const filterReducer = createReducer(initialState.filter, {
//   [setFilter]: (state, action) => action.payload,
// });

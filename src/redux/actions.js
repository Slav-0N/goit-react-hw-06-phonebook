import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
// console.log(addContact('Learn Redux Toolkit'));
// {type: "tasks/addTask", payload: "Learn Redux Toolkit"}

export const setFilter = createAction('filter/setFilter');
export const addName = createAction('name/addName');
export const addNumber = createAction('number/addNumber');
export const deleteContact = createAction('contacts/deleteContact');
export const filteredContacts = createAction('contacts/getFilteredContacts');

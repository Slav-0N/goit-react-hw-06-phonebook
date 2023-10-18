import { createSlice } from '@reduxjs/toolkit';

// const initialState = { name: '' };

export const addNameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: {
    addName: (state, action) => action.payload,
  },
});

export const { addName } = addNameSlice.actions;

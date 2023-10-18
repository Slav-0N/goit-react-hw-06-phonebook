import { createSlice } from '@reduxjs/toolkit';

export const addNumberSlice = createSlice({
  name: 'number',
  initialState: '',
  reducers: {
    addNumber: (state, action) => action.payload,
  },
});

export const { addNumber } = addNumberSlice.actions;

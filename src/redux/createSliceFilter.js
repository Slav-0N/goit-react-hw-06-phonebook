import { createSlice } from '@reduxjs/toolkit';

export const addFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = addFilterSlice.actions;

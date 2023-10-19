import React from 'react';
import FindSection from './Fnd.styled';

import { useDispatch } from 'react-redux';
// import {  getFilter } from 'redux/selectors';
import { setFilter } from 'redux/createSliceFilter';

const FindName = ({ changeFilterValue, value }) => {
  const dispatch = useDispatch();
  // const filter = useSelector(getFilter);

  const handleChange = ({ target: { value } }) => {
    // Початок перенесення
    // changeFilterValue(value);

    dispatch(setFilter(value));

    // кінец перенесення
  };
  return (
    <FindSection>
      <label htmlFor="search"> Find </label>
      <input
        id="search"
        type="text"
        name="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Search name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={handleChange}
      />
    </FindSection>
  );
};

export default FindName;

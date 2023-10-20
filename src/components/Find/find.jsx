import React from 'react';
import FindSection from './Fnd.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/createSliceFilter';

const FindName = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
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
        value={filter}
        onChange={handleChange}
      />
    </FindSection>
  );
};

export default FindName;

import SectionForm from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';

import { addName } from 'redux/createSliceName';
import { addNumber } from 'redux/createSliceNumber';

const Form = ({ createUser }) => {
  const name = useSelector(state => state.name);
  const number = useSelector(state => state.number);

  const dispatch = useDispatch();
  // const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        dispatch(addName(value));
        break;
      case 'number':
        dispatch(addNumber(value));
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    createUser({ number, name });
    dispatch(addName(''));
    dispatch(addNumber(''));
  };

  return (
    <SectionForm>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="phone"> Number </label>
          <input
            id="phone"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </div>

        <button type="submit"> Add contact </button>
      </form>
    </SectionForm>
  );
};

export default Form;

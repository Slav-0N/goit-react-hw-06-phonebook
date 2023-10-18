import ContactItems from 'components/ContactItem/ContactItem';
import FindName from 'components/Find/find';
import Form from 'components/Form/Form';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/createSliceContacts';
import { setFilter } from 'redux/createSliceFilter';

const UserList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  // const [filter, setFilter] = useState('');
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createUser = UserParams => {
    const { number, name } = UserParams;
    const isExistContact = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistContact) return alert('Existing Contact');

    const newUserElement = {
      name: name,
      number: number,
      id: nanoid(),
    };
    dispatch(addContact(newUserElement));
  };

  const changeFilterValue = filterQuery => dispatch(setFilter(filterQuery));

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form createUser={createUser} />

      <h2>Contacts</h2>
      <FindName changeFilterValue={changeFilterValue} value={filter} />
      {getFilteredContacts().length > 0 && (
        <ContactItems
          contacts={getFilteredContacts()}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default UserList;

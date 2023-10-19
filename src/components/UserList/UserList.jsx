import ContactItems from 'components/ContactItem/ContactItem';
import FindName from 'components/Find/find';
import Form from 'components/Form/Form';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/createSliceContacts';

import { getContacts, getFilter } from 'redux/selectors';

const UserList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // const changeFilterValue = filterQuery => dispatch(setFilter(filterQuery));

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
      <Form />

      <h2>Contacts</h2>
      {/* <FindName changeFilterValue={changeFilterValue} value={filter} /> */}
      <FindName />
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

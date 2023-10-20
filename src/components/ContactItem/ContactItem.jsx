import React from 'react';
import Contacts from './ContactItem.syled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/createSliceContacts';

const ContactItems = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <>
      {getFilteredContacts().length > 0 && (
        <Contacts>
          {getFilteredContacts().map(el => {
            return (
              <li key={el.id}>
                {el.name}: {el.number}
                <button onClick={() => handleDelete(el.id)}>Delete</button>
              </li>
            );
          })}
        </Contacts>
      )}
    </>
  );
};

export default ContactItems;

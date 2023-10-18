import React from 'react';
import Contacts from './ContactItem.syled';
const ContactItems = ({ contacts, handleDelete }) => {
  return (
    <Contacts>
      {contacts.map(el => {
        return (
          <li key={el.id}>
            {el.name}: {el.number}
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </li>
        );
      })}
    </Contacts>
  );
};

export default ContactItems;

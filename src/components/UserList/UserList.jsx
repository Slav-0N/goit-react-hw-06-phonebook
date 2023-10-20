import ContactItems from 'components/ContactItem/ContactItem';
import FindName from 'components/Find/find';
import Form from 'components/Form/Form';

const UserList = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <FindName />
      <ContactItems />
    </div>
  );
};

export default UserList;

import styled from 'styled-components';

const Contacts = styled.ul`
  color: green;
  font-size: 24px;
  li {
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-bottom: 20px;
    border: 1px green;
  }

  button {
    margin: auto 0;
    background-color: red;
    color: white;
    font-size: 20px;
  }
`;
export default Contacts;

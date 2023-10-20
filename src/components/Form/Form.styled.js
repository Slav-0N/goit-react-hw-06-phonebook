import styled from 'styled-components';

const SectionForm = styled.section`
  color: blueviolet;
  font-size: 20px;

  div {
    width: 450px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  input {
    font-size: 20px;
    width: 370px;
    /* margin-top: 20px; */
  }
  form {
    display: flex;
    flex-direction: column;
    width: 450px;
    align-items: end;
  }

  button {
    align-items: end;
    font-size: 20px;
    font-weight: 600;
    margin-top: 30px;
    color: #098b23;
  }
`;
export default SectionForm;

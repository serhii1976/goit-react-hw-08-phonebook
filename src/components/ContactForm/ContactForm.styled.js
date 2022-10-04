import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid;
  margin-bottom: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px 5px rgba(73, 70, 70, 0.5);
`;
export const InputTitle = styled.h3`
  font-weight: normal;
  margin-bottom: 5px;
`;
export const InputField = styled.input`
  margin-bottom: 15px;
  padding: 4px;
  width: 20vw;
`;
export const ButtonAdd = styled.button`
  width: 10vw;
  padding: 4px;
  color: #000000b8;
  background-color: white;
  border-color: #000000b8;
  border-radius: 4px;
  :hover {
    background-color: grey;
    color: white;
    cursor: pointer;
    box-shadow: 5px 4px 10px 4px rgba(73, 70, 70, 0.5);
  }
`;

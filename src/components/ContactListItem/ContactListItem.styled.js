import styled from 'styled-components';

export const ContactItem = styled.li`
  width: 25vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const ContactButton = styled.button`
  width: 5vw;
  padding: 2px;
  border-radius: 4px;
  color: #000000b8;
  background-color: white;
  border-color: #000000b8;
  :hover {
    background-color: grey;
    color: white;
    cursor: pointer;
    box-shadow: 5px 4px 10px 4px rgba(73, 70, 70, 0.5);
  }
`;

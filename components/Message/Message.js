import styled from "styled-components";

export const Message = styled.div`
  margin-top: 15px;
  background: black;
  padding: 15px;
  border-radius: 5px;
  border-bottom: 5px solid
    ${({ addedItem }) => (addedItem ? "green" : "yellow")};
`;

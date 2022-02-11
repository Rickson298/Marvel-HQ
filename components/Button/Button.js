import styled from "styled-components"

export const Button = styled.button`
  outline: none;
  transition: all ease 0.2s;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 14px;
  color: white;
  border: 1px solid gray;
  text-transform: uppercase;
  background: ${({ buy }) => (buy ? "green" : "rgb(0,0,150)")};
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    border: 1px solid lightGray;
  }
`;
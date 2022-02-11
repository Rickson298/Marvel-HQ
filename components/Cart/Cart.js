import styled from "styled-components";
import { Flex } from "../../styles/DefaultStyles";

export const Cart = styled(Flex("div", "center", "center"))`
  gap: 15px;
  position: relative;
  width: max-content;
  padding: 15px;
  cursor: pointer;
  &:hover .cart-icon {
    font-size: 30px;
  }
  .cart-icon {
    transition: all ease 0.2s;
    font-size: 24px;
  }
`;
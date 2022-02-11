import styled from "styled-components"
import { Flex } from "../../styles/DefaultStyles";

export const HQ = styled(Flex("div", "top", "center", "column"))`
  flex-wrap: wrap;
  padding: 50px;
  gap: 50px;
  min-height: 85%;
  background: rgba(0, 0, 0, 0.8);
`;
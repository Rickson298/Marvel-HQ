import styled from "styled-components"
import { Flex } from "../../styles/DefaultStyles";

export const ContainerImage = styled(Flex("div", "center", "center"))`
  img {
    width: 250px;
    border: 1px solid white;

    @media (max-width: 420px) {
      width: 200px;
    }
  }
`;
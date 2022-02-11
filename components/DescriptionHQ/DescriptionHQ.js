import { Flex } from "../../styles/DefaultStyles";
import styled from "styled-components"

export const DescriptionHQ = styled(Flex("div", "start", "start", "column"))`
  border-top: 1px solid gray;
  color: white;
  max-width: 500px;
  padding-top: 20px;

  .container-title-price {
    display: flex;
    flex-direction: column;
  }

  .title-hq {
    font-size: 20px;
  }
  .price-hq {
    color: white;
    font-size: 26px;
    font-weight: 600;
  }

  .description {
    margin: 15px 0px;
    color: gray;
  }
`;
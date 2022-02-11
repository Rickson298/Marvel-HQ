import styled from "styled-components";

export const ContainerCart = styled.div`
  padding: 15px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .cart-title {
    font-size: 36px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    @media (max-width: 450px) {
      font-size: 24px;
    }
  }

  .total-value {
    margin-left: auto;
    font-size: 26px;
  }

  .item-group {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-weight: 600;
  }

  .initial-value {
    font-weight: normal;
  }

  footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .link {
    display: flex;
    align-items: center;
    color: blue;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid blue;
    }
  }
`;

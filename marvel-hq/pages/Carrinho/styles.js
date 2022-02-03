import styled from "styled-components";

export const ItemCard = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  gap: 25px;
  border-top: 1px solid lightGray;

  img {
    width: 75px;
  }

  .item-title {
    font-size: 20px;
    font-weight: 600;
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .item-description {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: gray;
    font-weight: normal;
  }

  .price {
    font-size: 20px;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .increase,
  .decrease {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    font-size: 24px;
    cursor: pointer;
    color: #b07aff;
  }

  .increase {
    &:hover {
      color: #00008b;
    }
  }

  .decrease {
    &:hover {
      color: red;
    }
  }

  .informations-item {
    width: max-content;
  }

  .trash {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;

    @media (max-width: 450px) {
      width: 100%;
      justify-content: end;
    }

    .trash-icon {
      border-radius: 100%;
      color: red;
      font-size: 40px;
      padding: 10px;
      transition: all ease 0.2s;
      cursor: pointer;

      &:hover {
        color: white;
        background: red;
      }
    }
  }
`;

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

import styled from "styled-components";
import { Flex } from "../../../styles/DefaultStyles";

export const ContainerHQ = styled(Flex("div", "top", "center", "column"))`
  flex-wrap: wrap;
  padding: 50px;
  gap: 50px;
  min-height: 85%;
  background: rgba(0, 0, 0, 0.8);
`;

export const ContainerImage = styled(Flex("div", "center", "center"))`
  img {
    width: 250px;
    border: 1px solid white;

    @media (max-width: 420px) {
      width: 200px;
    }
  }
`;

export const ContainerRareHQ = styled.main`
  width: 100vw;
  height: 100vh;
`;

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

export const Button = styled.button`
  outline: none;
  transition: all ease .2s;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 14px;
  color: white;
  border: 1px solid gray;
  text-transform: uppercase;
  background: ${({ buy }) => (buy ? "green" : "rgb(0,0,150)")};
  cursor: pointer;
  border-radius: 25px;
  &:hover{
    border:1px solid lightGray;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  .cart {
    width: 100%;
    font-size: 20px;
    margin-left: auto;

  }
`;

export const GoBack = styled.nav`
  width: 100%;
  color: white;
  padding: 15px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  gap: 5px;
  transition: all ease 0.2s;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: lightGray;
  }
`;

export function Image({ src }) {
  return (
    <ContainerImage>
      <img src={src} />
    </ContainerImage>
  );
};


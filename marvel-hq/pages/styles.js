import styled from "styled-components";
import { Flex } from "../styles/DefaultStyles";

export const CardHQ = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  color: white;
  transition: all ease 0.2s;
  border: 2px solid gray;
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  width: 230px;
  height: 380px;
  box-shadow: -2px -120px 61px -11px rgba(0, 0, 0, 0.95) inset;
  -webkit-box-shadow: -2px -120px 61px -11px rgba(0, 0, 0, 0.95) inset;
  -moz-box-shadow: -2px -120px 61px -11px rgba(0, 0, 0, 0.95) inset;
  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 120%;
    background-color: rgba(255, 255, 255, 0.2);
    top: 50%;
    transform: skewX(30deg) translate(-120%, -50%);
    transition: all 0.2s;
  }

  &:hover::before {
    transform: skewX(30deg) translate(150%, -50%);
    transition-delay: 0.1s;
  }
  &:hover {
    box-shadow: -2px -120px 61px -11px rgba(0, 0, 0, 0) inset;
    -webkit-box-shadow: -2px -120px 61px -11px rgba(0, 0, 0, 0) inset;
    -moz-box-shadow: -2px -120px 61px -11px rgba(0, 0, 0, 0) inset;
    border: 2px solid white;
  &:hover .hq-title {
    display: none;
  }
  &:hover .hq-price {
    background: white;
    color: gray;
    font-weight: 600;
  }

`;

export const FooterHq = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  padding: 15px;
  height: 100%;
  z-index: 99999;

  div {
    display: flex;
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
  }

  .hq-title {
    display: flex;
    justify-content: start;
    font-weight: 600;
    transition: all ease 0.1s;
  }

  .hq-price {
    border-radius: 15px;
    background: black;
    border: 1px solid gray;
    color: white;
    padding: 5px 15px;
  }
`;

export const MainBackground = styled.article`
  width: 100vw;
  background-image: url("https://images7.alphacoders.com/990/thumb-1920-990523.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  @media (max-width: 420px) {
    background: black;
  }

  .marvel-logo {
    margin-left: 250px;
    border-radius: 15px;
  }

  .marvel-comics {
    width: 100%;
    font-size: 26px;
    color: white;
    padding-left: 25px;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 15px 0px 15px 0px;
`;

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

export const CartLength = styled.div`
  background: gray;
  position: absolute;
  font-size: 12px;
  right: 5px;
  top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  color: white;
  border-radius: 15px;
`;

export function FooterCardHq({ title, price, index, onClick }) {
  return (
    <FooterHq onClick={onClick}>
      <span className="hq-title">{title}</span>
      <div>
        <span className="hq-price">R${price}</span>
      </div>
    </FooterHq>
  );
}

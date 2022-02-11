import styled from "styled-components";

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
  }
  &:hover .hq-title {
    display: none;
  }
  &:hover .hq-price {
    background: white;
    color: gray;
    font-weight: 600;
  }

`;
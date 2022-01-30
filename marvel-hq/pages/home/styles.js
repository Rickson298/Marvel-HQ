import styled from "styled-components";
export const Header = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 25px;
  width: 100%;
  height: 5vh;
  display: flex;
  position: fixed;
  z-index: 9999;
  align-items: center;
  img {
    width: 150px;
  }
`;
export const ContainerCardHq = styled.div`
  max-width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 15px 0px 15px 0px;
`;
export const CardHQ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 15px;
  color: white;
  transition: all ease 0.2s;
  border: 1px solid gray;
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  width: 230px;
  height: 380px;
  box-shadow: -2px -64px 61px -11px rgba(0, 0, 0, 0.95) inset;
  -webkit-box-shadow: -2px -64px 61px -11px rgba(0, 0, 0, 0.95) inset;
  -moz-box-shadow: -2px -64px 61px -11px rgba(0, 0, 0, 0.95) inset;
  &:hover {
    box-shadow: -2px -129px 61px -11px rgba(0, 0, 0, 0.88) inset;
    -webkit-box-shadow: -2px -129px 61px -11px rgba(0, 0, 0, 0.88) inset;
    -moz-box-shadow: -2px -129px 61px -11px rgba(0, 0, 0, 0.88) inset;
    transform: scale(1.05);
  }

  .hq-title {
    text-align: start;
    display: flex;
    justify-content: center;
    font-weight: 600;
    width: 250px;
  }

  .hq-price {
    display: block;
    margin-left: auto;
    width: max-content;
    border-radius: 15px;
    margin-top: 5px;
    background: red;
    color: white;
    padding: 5px 15px;
  }
`;

export const CapaPrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images7.alphacoders.com/990/thumb-1920-990523.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;

  .marvel-logo {
    margin-left: 250px;
    border-radius: 15px;
  }
`;

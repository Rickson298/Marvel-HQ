import styled from "styled-components";

export const Header = styled.header`
  background: rgba(0, 0, 0, 1);
  height: 10%;
  padding: 25px;
  width: 100%;
  transition: all ease 0.2s;
  display: flex;
  z-index: 9999;
  align-items: center;
  img {
    width: 150px;
  }
`;
export const ContainerCardHq = styled.main`
  max-width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 15px 0px 15px 0px;
`;

export const CardHQ = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 15px;
  color: white;
  transition: all ease 0.2s;
  border: ${({ rareItem }) => (rareItem ? "2px solid gold" : "2px solid gray")};
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
    border: ${({ rareItem }) =>
      rareItem ? "2px solid gold" : "2px solid white"};
  }
  &:hover .hq-title {
    display: none;
  }
  &:hover .hq-price {
    background: white;
    color: gray;
    font-weight: 600;
  }
  &:hover .rare-hq {
    background: black;
    color: gold;
    font-weight: 600;
  }
`;

export const FooterHq = styled.footer`

  display: flex;
  flex-direction: column;
  width: 100%;
  

  div{
    display: flex;
    width:100%;
    margin-top: 10px;
    justify-content:space-between;
    align-items:center;
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

  .rare-hq{
    display:flex;
    border: 1px solid gold;
    align-items:center;
    color: gold;
    padding: 5px 15px;
    border-radius: 15px;s
  }
  
`;

export const MainBackground = styled.article`
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

export function FooterCardHq({ title, price, index, hqRareId }) {
  return (
    <FooterHq>
      <span className="hq-title">{title}</span>
      <div>
        <span className="hq-price">R${price}</span>
        {index == hqRareId && <span className="rare-hq">RARO</span>}
      </div>
    </FooterHq>
  );
}

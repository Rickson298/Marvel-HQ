import styled from "styled-components";

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
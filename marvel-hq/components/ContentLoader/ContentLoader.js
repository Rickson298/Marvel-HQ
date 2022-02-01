import styled from "styled-components";
import { keyframes } from "styled-components";

export default function ContentLoader() {
  const loading = keyframes`
  0%{
    transform: skewX(30deg) translate(-120%, -50%); 
  } 
  100%{
    transform: skewX(30deg) translate(450%, -50%);
  }
  `;

  const ContentLoader = styled.div`
    padding: 15px;
    background-image: url(/images/imageDefault.jpg);
    background-size: contain;
    background-position: center;
    width: 230px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border: 2px solid darkGray;

    .hq-footer-loader {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .hq-title-loader {
      position: relative;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.3);
      width: 200px;
      height: 25px;
      font-weight: 600;
      transition: all ease 0.1s;
      border-radius: 5px;
      border: 1px solid white;
      &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 120%;
        background: white;
        top: 50%;
        transform: skewX(30deg) translate(-120%, -50%);
        transition: all 1s;
        box-shadow: 2px 10px 86px 61px white;
        -webkit-box-shadow: 2px 10px 86px 61px white;
        -moz-box-shadow: 2px 10px 86px 61px white;
        animation: ${loading} 1s linear infinite;
      }

      &:hover::before {
        transform: skewX(30deg) translate(150%, -50%);
        transition-delay: 0.1s;
      }
    }

    .hq-price-loader {
      position: relative;
      overflow: hidden;
      width: 60px;
      height: 25px;
      border-radius: 25px;
      background: rgba(255, 255, 255, 0.3);
      color: white;
      padding: 5px 15px;
      border: 1px solid white;
      &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 120%;
        background: white;
        top: 50%;
        transform: skewX(30deg) translate(-120%, -50%);
        transition: all 1s;
        box-shadow: 2px 10px 86px 61px white;
        -webkit-box-shadow: 2px 10px 86px 61px white;
        -moz-box-shadow: 2px 10px 86px 61px white;
        animation: ${loading} 1s linear infinite;
      }

      &:hover::before {
        transform: skewX(30deg) translate(150%, -50%);
        transition-delay: 0.1s;
      }
    }

    .hq-content-loader {
      background: rgba(255, 255, 255, 0.3);
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      height: 100%;
      width: 100%;
      margin-bottom: 20px;
      &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 120%;
        background: white;
        top: 50%;
        transform: skewX(30deg) translate(-120%, -50%);
        transition: all 1s;
        box-shadow: 2px 10px 86px 61px white;
        -webkit-box-shadow: 2px 10px 86px 61px white;
        -moz-box-shadow: 2px 10px 86px 61px white;
        animation: ${loading} 1s linear infinite;
      }
      &:hover::before {
        transform: skewX(30deg) translate(150%, -50%);
        transition-delay: 0.1s;
      }
    }
  `;

  const ContainerContentLoader = styled.div`
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  `;
  return (
    <ContainerContentLoader>
      {Array.from({ length: 10 }).map(() => (
        <ContentLoader>
          <div className="hq-content-loader"></div>
          <div className="hq-footer-loader">
            <div className="hq-title-loader"></div>
            <div className="hq-price-loader"></div>
          </div>
        </ContentLoader>
      ))}
    </ContainerContentLoader>
  );
}

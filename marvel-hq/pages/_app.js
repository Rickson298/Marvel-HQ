import App from "next/app";
import "../styles/GlobalStyled.js";
import GlobalStyle from "../styles/GlobalStyled.js";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
      <GlobalStyle/>
        <Component {...pageProps} />
      </>
    );
  }
}

import App from "next/app";
import Head from "next/head";
import "../styles/GlobalStyled.js";
import GlobalStyle from "../styles/GlobalStyled.js";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Marvel HQ</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

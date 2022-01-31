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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

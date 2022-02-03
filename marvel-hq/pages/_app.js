import App from "next/app";
import Head from "next/head";
import "../styles/GlobalStyled.js";
import GlobalStyle from "../styles/GlobalStyled.js";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import  "../styles/globals.css"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <link
            rel="preload"
            href="../public/fonts/AvengeroRegular/AvengeroRegular.ttf"
            as="font"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;700&display=swap"
            rel="stylesheet"
          />
          <title>Marvel HQ</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

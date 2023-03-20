import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import theme from "theme/theme";

import "styles/Fonts.css";
import "styles/App.css";
import "styles/Contact.css";

import "react-calendar/dist/Calendar.css";
import "styles/MiniCalendar.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../reducers";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Kondoo Webadmin</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;

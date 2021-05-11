import * as React from "react";

import { auth, firestore } from "../lib/firebase";
import { useContext, useEffect, useState } from "react";

import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";
import createCache from "@emotion/cache";
import theme from "../src/theme";
import { useAuthState } from "react-firebase-hooks/auth";
import useUserdata from "../lib/hook";

export const cache = createCache({ key: "css", prepend: true });

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const userData = useUserdata();

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <UserContext.Provider value={userData}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <Toaster position="bottom-right" reverseOrder={false} />
        </ThemeProvider>
      </UserContext.Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

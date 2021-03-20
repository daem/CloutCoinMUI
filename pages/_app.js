import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import createCache from "@emotion/cache";
import theme from "../src/theme";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../lib/firebase";
import { UserContext } from "../lib/context";

export const cache = createCache({ key: "css", prepend: true });

export default function MyApp(props) {
    const { Component, pageProps } = props;
    const [user] = useAuthState(auth); //provides an easy way to listen to the current user in firebase

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    useEffect(() => {
        // turn off realtime subscription
        let unsubscribe;

        if (user) {
            const ref = firestore.collection("users").doc(user.uid);
            console.log(user);
            // unsubscribe = ref.onSnapshot((doc) => {
            //     console.log(doc.data());
            // });
        } else {
            console.log("ntohing");
        }

        return unsubscribe;
    }, [user]);

    return (
        <CacheProvider value={cache}>
            <Head>
                <title>My page</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <UserContext.Provider value={user}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Navbar />
                    <Component {...pageProps} />
                </ThemeProvider>
            </UserContext.Provider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

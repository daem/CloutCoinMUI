import React, { useContext, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import { UserContext } from "../lib/context";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

const Navbar = () => {
    const [address, setAddress] = useState();
    const classes = useStyles();

    const user = useContext(UserContext);

    const signInSignOut = async () => {
        if (user) {
            await auth.signOut();
            console.log("Signed Out");
        } else {
            await auth.signInWithPopup(googleAuthProvider);
            console.log("Signed In");
        }
    };

    useEffect(() => {
        console.log(address);
    }, [address]);

    useEffect(() => {
        ethereum.on("accountsChanged", handleAccountsChanged);
        console.log("nut");
    }, []);

    useEffect(() => {
        ethereum
            .request({ method: "eth_accounts" })
            .then(handleAccountsChanged)
            .catch((err) => {
                // Some unexpected error.
                // For backwards compatibility reasons, if no accounts are available,
                // eth_accounts will return an empty array.
                console.error(err);
            });
    }, []);

    function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            // MetaMask is locked or the user has not connected any accounts
            console.log("Please connect to MetaMask.");
        } else if (accounts[0] !== address) {
            setAddress(accounts[0]);
            // Do any other work!
        }
    }

    function connect() {
        ethereum
            .request({ method: "eth_requestAccounts" })
            .then(handleAccountsChanged)
            .catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    // If this happens, the user rejected the connection request.
                    console.log("Please connect to MetaMask.");
                } else {
                    console.error(err);
                }
            });
    }

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Toolbar className={classes.toolbar}>
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    CloutCoin
                </Typography>
                <nav>
                    <Button
                        href="#"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                        onClick={signInSignOut}
                    >
                        {user ? "Signout" : "SignIn"}
                    </Button>
                    <Button
                        href="#"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                        onClick={connect}
                    >
                        {`${address?.slice(0, 8)}...`}
                    </Button>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

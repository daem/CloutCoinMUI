import React, { useContext, useEffect } from "react";

import { Button } from "@material-ui/core";
import { UserContext } from "../lib/context";
import { auth } from "../lib/firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const MetaMaskButton = () => {
  const classes = useStyles();
  const { user, username, address, setAddress } = useContext(UserContext);

  const signInWithAnon = async () => {
    await ethereum
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
  };

  const handleAccountsChanged = async (accounts) => {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== address) {
      setAddress(accounts[0]);
      await auth.signInAnonymously();
    }
  };

  return (
    <div>
      <Button
        href="#"
        color="primary"
        variant="outlined"
        className={classes.link}
        onClick={signInWithAnon}
      >
        {`${address?.slice(0, 8)}...`}
      </Button>
    </div>
  );
};

export default MetaMaskButton;

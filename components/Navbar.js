import React, { useContext, useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import Link from "next/link";
import MetaMaskButton from "./MetaMaskButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../lib/context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  profileImage: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    maxWidth: "100%",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const { user, username, address, setAddress } = useContext(UserContext);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            CloutCoin
          </Typography>
        </Link>

        <nav>
          <MetaMaskButton />
        </nav>
        {username && (
          <>
            <Button
              onClick={() => {
                auth.signOut();
                console.log(auth);
              }}
            >
              {username} - Sign Out
            </Button>
            <Link href={`/${username}`}>
              <img className={classes.profileImage} src={user?.photoURL} />
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

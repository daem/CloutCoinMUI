import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import CCABI from "../cloutcoin.json";
import TLABI from "../timelock.json";
import { UserContext } from "../lib/context";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import toast from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(2, 0, 6),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const CompanyBalance = ({ address }) => {
  //   const { provider, setProvider } = useContext(UserContext);
  const classes = useStyles();

  const [timelockAddr, setTimelockAddr] = useState();

  const getBal = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await ethereum.request({ method: "eth_requestAccounts" });
    const signer = provider.getSigner();
    const contract = new ethers.Contract(timelockAddr, TLABI.abi, signer);

    const newBal = await contract
      .getCompanyBal()
      .then(console.log("test"))
      .catch(console.log("error"));

    console.log(newBal.toString());
    toast.success("Balance on Contract: " + newBal.toString());
  };

  return (
    <div>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <div className={classes.heroButtons}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Gets the clients balance within the smart contracts mappings
          </Typography>
          <Grid container spacing={2} justify="center">
            <form autoComplete="off" onSubmit={getBal}>
              <TextField
                required
                id="standard-required"
                label="Timelock address"
                onChange={(e) => setTimelockAddr(e.target.value)}
              />
              <Button type="submit" className="btn-green">
                Submit
              </Button>
            </form>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default CompanyBalance;

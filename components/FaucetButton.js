import {
  Button,
  Container,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import CCABI from "../cloutcoin.json";
import { UserContext } from "../lib/context";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

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

const FaucetButton = ({ address }) => {
  //   const { provider, setProvider } = useContext(UserContext);
  const classes = useStyles();

  const [faucetState, setFaucetState] = useState({
    amount: "100",
    address: "",
  });

  const getCoins = async (e) => {
    e.preventDefault();

    console.log(faucetState);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await ethereum.request({ method: "eth_requestAccounts" });
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      faucetState.address,
      CCABI.abi,
      signer
    );

    console.log(contract);
    // console.log("symbol: " + (await contract.symbol()));

    console.log(ethers.utils.parseEther("1000000000000000000"));
    console.log(ethers.utils.formatEther(1));
    console.log(ethers.utils.formatUnits(1));
    console.log(ethers.utils.parseUnits("1").toString());

    await contract
      .faucet(ethers.utils.parseUnits("1").toString())
      .then(console.log("test"))
      .catch(console.log("error"));

    if (provider) {
      console.log("Ethereum successfully detected!");
    }
  };

  return (
    <div>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <form autoComplete="off" onSubmit={getCoins}>
              <TextField
                required
                id="standard-required"
                label="Amount of Tokens"
                defaultValue={1}
                onChange={(e) =>
                  setFaucetState({ ...faucetState, amount: e.target.value })
                }
              />

              <TextField
                required
                id="standard-required"
                label="cloutcoin contract addr..."
                onChange={(e) =>
                  setFaucetState({ ...faucetState, address: e.target.value })
                }
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

export default FaucetButton;

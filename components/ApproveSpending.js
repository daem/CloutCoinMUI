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
import { firestore } from "../lib/firebase";
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

const ApproveSpending = ({ address, username }) => {
  //   const { provider, setProvider } = useContext(UserContext);
  const classes = useStyles();

  const [timeLockState, setTimeLockState] = useState({
    amount: "100",
    address: "",
    allowance: 0,
  });

  const [cloutAddr, setCloutAddr] = useState();

  const getCoins = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await ethereum.request({ method: "eth_requestAccounts" });
    const signer = provider.getSigner();
    const contract = new ethers.Contract(cloutAddr, CCABI.abi, signer);

    console.log(contract);
    // console.log("symbol: " + (await contract.symbol()));
    let bool = await contract
      .approve(timeLockState.address, timeLockState.amount)
      .then(console.log("test"))
      .catch(console.log("error"));

    toast.success("Approved: ", bool);

    let t = await contract
      .allowance(address, timeLockState.address)
      .then(console.log("test"))
      .catch(console.log("error"));

    setTimeLockState({ ...timeLockState, allowance: t.toString() });

    console.log(t);
    toast.success("Approved " + t.toString() + " Tokens");

    if (provider) {
      console.log("Ethereum successfully detected!");
    }
  };

  const sendTransfer = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await ethereum.request({ method: "eth_requestAccounts" });
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      timeLockState.address,
      TLABI.abi,
      signer
    );

    console.log(contract);
    console.log(timeLockState.allowance.toString());
    let t = await contract
      .transferToContract(address, cloutAddr, timeLockState.allowance)
      .then(toast.success("Transferred: ", timeLockState.allowance))
      .catch(console.log("error"));

    if (t) {
      const userDoc = firestore.doc(`users/${address}`);

      // Commit both docs together as a batch write.
      const batch = firestore.batch();
      batch.set(userDoc, {
        username: username,
        balance: timeLockState.allowance,
      });

      await batch.commit();
    }

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
                label="Approve CC Amount"
                defaultValue={timeLockState.amount}
                onChange={(e) =>
                  setTimeLockState({ ...timeLockState, amount: e.target.value })
                }
              />

              <TextField
                required
                id="standard-required"
                label="set clout addr..."
                onChange={(e) => setCloutAddr(e.target.value)}
              />
              <p></p>

              <TextField
                required
                id="standard-required"
                label="timelock contract addr..."
                onChange={(e) =>
                  setTimeLockState({
                    ...timeLockState,
                    address: e.target.value,
                  })
                }
              />
              <Button type="submit" className="btn-green">
                Send Approval
              </Button>
            </form>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <div className={classes.heroButtons}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Client execute business transfer
          </Typography>
          <Grid container spacing={2} justify="center">
            <Button type="submit" className="btn-green" onClick={sendTransfer}>
              transfer To Contract
            </Button>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ApproveSpending;

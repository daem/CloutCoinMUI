import {
  Button,
  Container,
  Fab,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import ApproveSpending from "./ApproveSpending";
import CCABI from "../cloutcoin.json";
import CompanyBalance from "./CompanyBalance";
import FaucetButton from "./FaucetButton";
import { UserContext } from "../lib/context";
import { ethers } from "ethers";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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

export default function ProjectOptions() {
  const classes = useStyles();
  const { user, username, address, setAddress, provider } = useContext(
    UserContext
  );

  const [balance, setBalance] = useState(0);
  const [cloutAddress, setCloutAddress] = useState();

  const getContractBalance = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await ethereum.request({ method: "eth_requestAccounts" });

    const contract = new ethers.Contract(cloutAddress, CCABI.abi, provider);
    console.log(contract);

    let bal = await contract
      .balanceOf(cloutAddress)
      .then(console.log("test"))
      .catch(console.log("error"));
    let test = bal.toString();

    setBalance(ethers.utils.formatEther(test));
  };

  //true means company
  //false
  const [option, setOption] = useState();

  const addToMeta = async () => {
    const tokenAddress = "0xd00981105e61274c8a5cd5a88fe7e037d935b513";
    const tokenSymbol = "TUT";
    const tokenDecimals = 18;
    const tokenImage = "http://placekitten.com/200/300";

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(cloutAddress);
  }, [cloutAddress]);

  return (
    <>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <form autoComplete="off" onSubmit={getContractBalance}>
          Balance of Contract: {balance}
          <TextField
            required
            id="standard-required"
            label="cloutcoin contract addr..."
            fullWidth
            onChange={(e) => setCloutAddress(e.target.value)}
          />
          <Button type="submit" className="btn-green">
            Submit
          </Button>
        </form>
        <Typography
          fullWidth
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Project Options
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Choose A Path
        </Typography>
      </Container>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOption("company")}
              >
                <AddIcon className={classes.extendedIcon} />
                Create Company Account
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOption("influencer")}
              >
                <AddIcon className={classes.extendedIcon} />
                Create Influencer Account
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>

      {option == "company" ? (
        <>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Temp Faucet For Demo
          </Typography>
          <FaucetButton address={address} provider={provider} />
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Business Approves Transfer Of Token
          </Typography>
          <ApproveSpending address={address} username={username} />
          <CompanyBalance />
          <Button onClick={addToMeta}>Add To Meta</Button>{" "}
        </>
      ) : (
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Temp Faucet For Demo
        </Typography>
      )}
    </>
  );
}

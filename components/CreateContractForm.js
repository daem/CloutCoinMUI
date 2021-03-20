import {
    Box,
    Button,
    Container,
    CssBaseline,
    Divider,
    Grid,
    makeStyles,
    TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import deploy from "../src/deploy";
import ContractList from "./ContractList";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const CreateContractForm = () => {
    const classes = useStyles();

    const [checker, setChecker] = useState(
        "0xf7c984caFCea9A3772A0688945c8D034B4f7CC37"
    );
    const [reciever, setReciever] = useState(
        "0x8c6CB2fAe5866B7279dfAD08CF448c8a5CdE8448"
    );
    const [contract, setContract] = useState("");

    const [wei, setWei] = useState("1000000000000000000");

    const [contractArray, setContractArray] = useState([]);
    // const contractArray = [];

    useEffect(() => {
        console.log(reciever, checker, wei);
    }, [checker, reciever, wei]);

    const formatForm = (e) => {
        if (e.target.name === "checker") {
            setChecker(e.target.value);
        }
        if (e.target.name === "reciever") {
            setReciever(e.target.value);
        }
        if (e.target.name === "wei") {
            setWei(e.target.value);
        }
    };

    let contractNum = 0;
    const newContract = async (e) => {
        e.preventDefault();
        console.log("about to set contractArray1");

        const con = await deploy(checker, reciever, wei);
        setContract(con);
        contractNum++;

        setContractArray((contractArray) => [
            ...contractArray,
            {
                contractNum: contractNum,
                contract: con,
                checker: checker,
                reciever: reciever,
                wei: wei,
            },
        ]);
    };

    return (
        <Box>
            <Grid container spacing={3} justify="center">
                <form onSubmit={newContract}>
                    <Grid item sm={12}>
                        <TextField
                            required
                            label="reciever"
                            name="reciever"
                            value={reciever}
                            onChange={formatForm}
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            required
                            label="checker"
                            name="checker"
                            value={checker}
                            onChange={formatForm}
                            autoComplete="off"
                        />
                    </Grid>

                    <Grid item sm={12}>
                        <TextField
                            required
                            label="wei"
                            name="wei"
                            value={wei}
                            onChange={formatForm}
                            autoComplete="off"
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                            className={classes.submit}
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>

            {/*} <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={8}>
                    {contract ? (
                        <ContractList
                            contractNum={contractNum}
                            contract={contract}
                            checker={checker}
                            reciever={reciever}
                            wei={wei}
                        />
                    ) : (
                        ""
                    )}
                </Grid>
                    </Grid>*/}

            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={8}>
                    {contractArray?.map((e, idx) => (
                        <ContractList
                            contractNum={idx}
                            contract={e.contract}
                            checker={e.checker}
                            reciever={e.reciever}
                            wei={e.wei}
                        />
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default CreateContractForm;

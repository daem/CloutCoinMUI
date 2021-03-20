import {
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { ethers } from "ethers";

const ContractList = ({ contractNum, contract, checker, reciever, wei }) => {
    // await window.ethereum.enable();
    // const provcontractNumer = new ethers.provcontractNumers.Web3ProvcontractNumer(window.ethereum);
    const [status, setStatus] = useState("Not Approved");

    console.log(contractNum);
    console.log(contract);
    console.log(checker);
    console.log(reciever);
    console.log(wei);

    contract?.on("Approved", () => {
        setStatus("Approved");
    });

    // console.log("con", contract);

    const approve = async () => {
        await window.ethereum.enable();
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        //get current signer
        const signer = provider.getSigner();
        //gets the signer to call the function
        console.log(signer);
        await contract?.connect(signer).approve();
        setStatus("Checking...");
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Contract #{contractNum}
                </Typography>

                <Typography variant="body2" component="p">
                    Checker : {checker}
                </Typography>
                <Typography variant="body2" component="p">
                    Reciever : {reciever}
                </Typography>
                <Typography variant="body2" component="p">
                    Wei : {wei}
                </Typography>
                <Typography variant="body2" component="p">
                    Status : {status}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" size="small" onClick={approve}>
                    Approve
                </Button>
            </CardActions>
        </Card>
    );
};

export default ContractList;

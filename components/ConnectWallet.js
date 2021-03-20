import React, { useEffect, useState } from "react";

const ConnectWallet = () => {
    const [status, setStatus] = useState();

    useEffect(() => {
        console.log(status);
    }, [status]);

    const connect = async () => {
        if (typeof window.ethereum !== "undefined") {
            console.log("MetaMask is installed!");
        }
        const [selectedAddress] = await window.ethereum.enable();
        console.log(selectedAddress);
        let check = await ethereum.isConnected();
        setStatus(check);
    };
    return (
        <div>
            <button onClick={connect}>Connect</button>
            <p>Status: {status ? "True" : "False"}</p>
        </div>
    );
};

export default ConnectWallet;

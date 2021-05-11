import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";

import { ethers } from "ethers";
import { useAuthState } from "react-firebase-hooks/auth";

const useUserdata = () => {
  const [user] = useAuthState(auth); //provides an easy way to listen to the current user in firebase
  const [username, setUsername] = useState(null);
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [cloutAddr, setCloutAddr] = useState(null);

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== address) {
      setAddress(accounts[0]);
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  }

  useEffect(() => {
    ethereum
      .request({ method: "eth_accounts" })
      .then(handleAccountsChanged)
      .catch((err) => {
        // eth_accounts will return an empty array.
        console.error(err);
      });

    ethereum.on("accountsChanged", handleAccountsChanged);
  }, []);

  useEffect(async () => {
    // turn off realtime subscription
    let unsubscribe;

    if (user && address) {
      console.log("called", address);

      const ref = firestore.collection("users").doc(address);
      unsubscribe = ref.onSnapshot((doc) => {
        console.log("doc", doc);
        setUsername(doc.data()?.username);
      });
    } else if (user) {
      user == null;
      return;
    } else {
      setUsername(null);
    }

    console.log("addr", address);

    return unsubscribe;
  }, [user, address]);

  return {
    user,
    username,
    address,
    setAddress,
    provider,
    setProvider,
    cloutAddr,
    setCloutAddr,
  };
};

export default useUserdata;

import React, { useContext, useEffect } from "react";

import Enter from "./enter";
import LandingPage from "./LandingPage";
import { UserContext } from "../lib/context";
import toast from "react-hot-toast";

export default function Index() {
  const { user, username, address, setAddress } = useContext(UserContext);

  return <div>{username ? <Enter /> : <LandingPage />}</div>;
}

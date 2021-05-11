import { createContext, useMemo, useState } from "react";

export const UserContext = createContext({
  user: null,
  username: null,
  address: null,
});

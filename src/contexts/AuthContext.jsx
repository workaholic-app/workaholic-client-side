import React from "react";
import useAuthHandler from "../utils/custom-hooks/AuthHandler";
import { DEFAULT_USER_AUTH } from "../utils/constants";
import { getStoredUserAuth } from "../utils/helpers";

export const authContext = React.createContext({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnauthStatus: () => {}
});

const { Provider } = authContext;

export const AuthContextProvider = ({ children }) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(
    getStoredUserAuth()
  );

  return (
    <Provider value={{ auth, setAuthStatus, setUnauthStatus }}>
      {children}
    </Provider>
  );
};
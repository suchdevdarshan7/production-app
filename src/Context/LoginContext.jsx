import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLogIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <LoginContext.Provider
      value={{ loggedIn, setLogIn, currentUser, setCurrentUser }}>
      {children}
    </LoginContext.Provider>
  );
};

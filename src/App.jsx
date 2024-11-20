import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./Context/LoginContext.jsx";
import Login from "./Components/Login.jsx";

import Home from "./Components/Home.jsx";

const App = () => {
  const { loggedIn } = useContext(LoginContext);

  return <div>{loggedIn ? <Home /> : <Login />}</div>;
};

export default App;

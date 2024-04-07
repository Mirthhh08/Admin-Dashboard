import React, { useContext, useEffect } from "react";

import { StateContext } from "./Context/StateContext"; // Import from correct file

import Login from "./Pages/Login";

import Admin from "./Pages/Admin";
const App = () => {
  const { display, setDisplay } = useContext(StateContext);

  // return <>{display ? <Admin /> : <Login />}</>;
  return <Admin />;
};

export default App;

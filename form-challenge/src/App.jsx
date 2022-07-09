import Navbar from "./Components/Micro/Navbar/Navbar";
import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext();


function App() {
 
  let [page, setPage] = useState(false);

  function permission(x) {
    setPage((page = x));
    console.log(x)
  }

  function returnValue(){
    return page
  }


  return (
    <AuthContext.Provider value={permission}>
      <Navbar />
    </AuthContext.Provider>
  );
}

export default App;

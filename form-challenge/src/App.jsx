import Navbar from "./Components/Micro/Navbar/Navbar";
import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext();


function App() {
 
  let [isLogged, setIsLogged] = useState(false);

  function permission() {
    setIsLogged((isLogged = true));
    console.log("a")
  }


  return (
    <AuthContext.Provider value={permission}>
      <Navbar />
    </AuthContext.Provider>
  );
}

export default App;

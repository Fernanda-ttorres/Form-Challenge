import Navbar from "./Components/Navbar/Navbar"
import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext();


function App() {
  let [page, setPage] = useState(false);
  
  return (
    <AuthContext.Provider value={{name: [page, setPage]}}>
      
        <Navbar />
      
    </AuthContext.Provider>
  );
}

export default App;

import Test from "./Components/testing/test";
import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext();


function App() {
  let [page, setPage] = useState(0);
  
  return (
    <AuthContext.Provider value={{name: [page, setPage]}}>
      
        <Test />
      
    </AuthContext.Provider>
  );
}

export default App;

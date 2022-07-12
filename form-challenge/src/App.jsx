
import React from "react";
import { Card } from "./Components/Card/Card";
import { useState } from "react";

export const AuthContext = React.createContext();


function App() {
  let [page, setPage] = useState(false);
  
  return (
    <AuthContext.Provider value={{name: [page, setPage]}}>
          <Card/>
    </AuthContext.Provider>
  );
}

export default App;

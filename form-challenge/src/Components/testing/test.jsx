import Navbar from "../Navbar/Navbar";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../App";


import A from "./a";
import B from "./b";
import C from "./c";

function Test() {
    

    
    const { name } = React.useContext(AuthContext);
    const [page, setPage] = name;
    

  const Titles = ["page1", "page2", "page3"];

  const changePage = (x) => {
    setPage(x-1)
  }

  let [lock, setLock] = useState(0)
  

  const PageDisplay = () => {
    if (page === 0) {
        return <A fun={setLock}/>
    } else if (page === 1) {
        return <B fun={setLock} />
    } else if (page === 2) {
        return <C />
    }
  }




  return (
    <>
    <h1>{Titles[page]}</h1>
    <Navbar fun={changePage} lock={lock}/>
    <div>{PageDisplay()}</div>
 

    </>
  );
}

export default Test;

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

  const PageDisplay = () => {
    if (page === 0) {
        return <A/>
    } else if (page === 1) {
        return <B/>
    } else if (page === 2) {
        return <C/>
    }
  }



  return (
    <>
    <h1>{Titles[page]}</h1>
    <Navbar fun={changePage}/>
    <div>{PageDisplay()}</div>
    <button onClick={() => changePage(1)}>BASIC</button>
    <button onClick={() => changePage(2)}>SOCIAL</button>
    <button onClick={() => changePage(3)}>CERTIFICATES</button>

    </>
  );
}

export default Test;

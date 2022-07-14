import Navbar from "../Navbar/Navbar";
import { useState } from "react";

import A from "./a";
import B from "./b";
import C from "./c";

function Test() {


    
  const [page, setPage] = useState(0);
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
    <button onClick={() => changePage(1)}>FIRST</button>
    <button onClick={() => changePage(2)}>SECOND</button>
    <button onClick={() => changePage(3)}>THIRD</button>

    </>
  );
}

export default Test;

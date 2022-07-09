import React, { useState, useContext } from "react";
import { NavStyled } from "./Navbar.styled";

import { AuthContext } from "../../../App";

export const Navbar = () => {
  

  const [a, SetA] = useState(false);
  const [b, SetB] = useState(true);
  const [c, SetC] = useState(true);

  

  function setTab(x, y, z) {
    SetA(x);
    SetB(y);
    SetC(z);
  }


  function handleClick(value){
    if(value == "basic") {
      setTab(false, true, true);
    } else if (value == "social") {
      setTab(true, false, true);
    } else if ( value == "certificates") {
      setTab(true, true, false);
    }
  }

  const setName = (x) => {
    return x ? "false" : "true";
  };

  
  const setContext = useContext(AuthContext);

  return (
    <NavStyled>
      <button className="one" onClick={() => setContext()}>|</button>
      <button className="two" onClick={() => setContext()}>||</button>

      <div className="navbar-div">
        <nav className="nav">
          <p
            name="basic"
            className={setName(a)}
            onClick={() => handleClick("basic")}
          >
            Basic
          </p>
          <p
            name="basic"
            className={setName(b)}
            onClick={() => handleClick("social")}
          >
            {" "}
            Social
          </p>
          <p
            name="basic"
            className={setName(c)}
            onClick={() => handleClick("certificates")}
          >
            Certificates
          </p>
        </nav>
      </div>
    </NavStyled>
  );
};

export default Navbar;

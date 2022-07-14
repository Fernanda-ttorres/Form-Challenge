import React, { useState, useContext } from "react";
import { NavStyled } from "./Navbar.styled";

import { AuthContext } from "../../App";

export const Navbar = (props) => {
  
  const changePage = props.fun;
  
  
  const [a, SetA] = useState(false);
  const [b, SetB] = useState(true);
  const [c, SetC] = useState(true);

  function setTab(x, y, z, n) {
    changePage(n)
    SetA(x);
    SetB(y);
    SetC(z);
  }

  const { name } = React.useContext(AuthContext);
  const [page, setPage] = name;
  setPage(3);

  function handleClick(value) {
    switch (page) {
      case 1:
        setTab(false, true, true, 1);
        
        break;
      case 2:
        if (value == "basic") {
          setTab(false, true, true, 1);
          
        } else if (value == "social") {
          setTab(true, false, true, 2);
         
        }
        break;
      case 3:
        if (value == "basic") {
          setTab(false, true, true, 1);
          
        } else if (value == "social") {
          setTab(true, false, true, 2);
          
        } else if (value == "certificates") {
          setTab(true, true, false, 3);
          
        }
        break;
    }
  }

  const setName = (x) => {
    return x ? "false" : "true";
  };

 


  return (
    <NavStyled>
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

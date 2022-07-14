import React, { useState, useContext } from "react";
import { NavStyled } from "./Navbar.styled";

import { AuthContext } from "../../App";

export const Navbar = (props) => {
  const changePage = props.fun;

  const { name } = React.useContext(AuthContext);
  const [page] = name;

  

let a,b,c
  
  if(page == 0) {
    a = "true"
  } else if (page == 1) {
    b = "true"
  } else if (page == 2 ) {
    c = "true"
  }
  

  

  return (
    <NavStyled >
      <div className="navbar-div">
        <nav className="nav">
          <p
            name="basic"
            className={a}
            onClick={() => changePage(1)}
            
          >
            Basic
          </p>
          <p
            name="social"
            className={b}
            onClick={() => changePage(2)}

          >
            
            Social
          </p>
          <p
            name="certificate"
            className={c}
            onClick={() => changePage(3)}
          >
            Certificates
          </p>
        </nav>
      </div>
    </NavStyled>
  );
};

export default Navbar;


import React, { useState, useContext, useEffect } from "react";

import { AuthContext } from "../Containers/Page/Page";

import { NavStyled } from "./Navbar.styled";
export const Navbar = ({lock}) => {

  const { name } = React.useContext(AuthContext); //page authcontext
  const [page,setPage] = name; //page state

  console.log(lock)
  let tabA,tabB,tabC
  
  if(page == 0) {
    tabA = "true"
  } else if (page == 1) {
    tabB = "true"
  } else if (page == 2 ) {
    tabC = "true"
  }

  const handleClick = (x) => {
    setPage(x)
  }


  return (
    <NavStyled>
      <div className="navbar-div">
        <nav className="nav">
         <div className="tab" id={tabA} onClick={() => handleClick(0)}><p>Basic</p></div>
         <div className="tab" id={tabB} onClick={() => handleClick(1)}><p>Social</p></div>
         <div className="tab" id={tabC}onClick={() => handleClick(2)}><p>Certificates</p></div>
        </nav>
      </div>
    </NavStyled>
  );
};

export default Navbar;

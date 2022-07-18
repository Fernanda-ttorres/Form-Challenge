import React, { useState, useContext, useEffect } from "react";
import { set } from "react-hook-form";

import { AuthContext } from "../Containers/Page/Page";

import { NavStyled } from "./Navbar.styled";
export const Navbar = ({lock}) => {

const { name } = React.useContext(AuthContext); //page authcontext
  const [page,setPage] = name; //page state

 
  let tabA,tabB,tabC
  let Nav = "navbar-div"
  
  if(page == 0) {
    tabA = "true"
  } else if (page == 1) {
    tabB = "true"
  } else if (page == 2 ) {
    tabC = "true"
  } else if ( page == 3) {
    Nav = "sucess"
  }

  const handleClick = (x) => {
    switch(lock) {
      case 0 : {
        setPage(0);
      } break;

      case 1 : {
        if(x == 0) {
          setPage(0)
        } else if (x == 1) {
          setPage(1)
        }
      } break;

      case 2 : {
        if(x == 0) {
          setPage(0)
        } else if ( x == 1) {
          setPage(1)
        } else if ( x == 2) {
          setPage(2)
        }
      }

      
    } 
  } 


  return (
    <NavStyled>
      <div className={"navbar-div"} >
        <nav className={Nav}>
         <div className="tab" id={tabA} onClick={() => handleClick(0)}><p>Basic</p></div>
         <div className="tab"  id={tabB} onClick={() => handleClick(0)}><p>Social</p></div>
         <div className="tab"  id={tabC} onClick={() => handleClick(0)}><p>Certificates</p></div>
        </nav>
      </div>
    </NavStyled>
  );
};

export default Navbar;
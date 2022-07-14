import React, { useState, useContext, useEffect } from "react";
import { NavStyled } from "./Navbar.styled";

import { AuthContext } from "../../App";
import { set } from "react-hook-form";

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

  console.log(props.lock)
  
  const handleClick = (x) => {
    switch (props.lock) {
      case 0: {
        changePage(1)
        
      }break;

      case 1: {
        if(x == 1) {
          changePage(1)
          
        } else if(x == 2) {
          changePage(2)
          
        }
      }break;

      case 2: {
        if(x == 1) {
          changePage(1)
          
        } else if(x == 2) {
          changePage(2)
          
        } else if( x == 3) {
          changePage(3)
         
        }
      }break;


    }

  }

  

  return (
    <NavStyled >
      <div className="navbar-div">
        <nav className="nav">
          <p
            name="basic"
            className={a}
            onClick={() => handleClick(1)}
            
          >
            Basic
          </p>
          <p
            name="social"
            className={b}
            onClick={() => handleClick(2)}

          >
            
            Social
          </p>
          <p
            name="certificate"
            className={c} 
            onClick={() => handleClick(3)}         
          >
            Certificates
          </p>
        </nav>
      </div>
    </NavStyled>
  );
};

export default Navbar;

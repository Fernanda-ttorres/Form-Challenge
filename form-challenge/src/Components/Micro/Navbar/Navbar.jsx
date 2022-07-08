import React, { useState } from "react";
import { NavStyled } from "./Navbar.styled";

export const Navbar = () => {

  
  const [a, SetA] = useState(false);
  const [b, SetB] = useState(false);
  const [c, SetC] = useState(false);



  function handleClick(value) {
    switch(value) {
      case "basic": console.log("uva")
      break;
      case "social": console.log("banana")
      break;
      case "certificates": console.log("maça")
      break;
    }
  }

  



  return (
    <NavStyled>
      <div className="navbar-div">
        <nav className="nav">
          <p name="basic" onClick={() => handleClick("basic")}>Basic</p>
          <p name="basic" onClick={() => handleClick("social")}> Social</p>
          <p name="basic" onClick={() => handleClick("certificates")}>Certificates</p>
        </nav>
      </div>
    </NavStyled>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavStyled } from "./Navbar.styled";

export const Navbar = () => {
 
  const [a, SetA] = useState("false");
  const [b, SetB] = useState("false");
  const [c, SetC] = useState("false");

  
function settingA() {
  SetA(current => !current);
  SetB(true);
  SetC(true);

  
}

function settingB() {
  SetA(true);
  SetB(current => !current);
  SetC(true);
}

function settingC() {
  SetA(true);
  SetB(true);
  SetC(current => !current);
}


  function handleClick(value) {
    switch(value) {
      case "basic": settingA();
      break;
      case "social": settingB();
      break;
      case "certificates": settingC();
      break;
    }
  }

  const setName = (x) => {
    return (x ? 'false' : 'true');
   }

  return (
    <NavStyled>
      <div className="navbar-div">
        <nav className="nav">
          <p name="basic" className={setName(a)}  onClick={() => handleClick("basic")}>Basic</p>
          <p name="basic" className={setName(b)} onClick={() => handleClick("social")}> Social</p>
          <p name="basic"className={setName(c)} onClick={() => handleClick("certificates")}>Certificates</p>
        </nav>
      </div>
    </NavStyled>
  );
};

export default Navbar;

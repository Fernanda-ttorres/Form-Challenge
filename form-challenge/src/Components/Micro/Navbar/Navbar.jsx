import React, { useState } from "react";
import { NavStyled } from "./Navbar.styled";
import { Routes } from "react-router-dom";

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
   const handleClick = () => {
    setIsActive(current => !current);
   };

   const setName = () => {
    return (isActive ? 'true' : 'false');
   }

  return (
    <NavStyled>
      <div className="navbar-div">
        <nav className="nav">
          <p className={setName()} onClick={handleClick} >Basic</p>
          <p className={setName()} onClick={handleClick}  >Social</p>
          <p className={setName()} onClick={handleClick} >Certificates</p>
        </nav>
      </div>
    </NavStyled>
  );
};

export default Navbar;

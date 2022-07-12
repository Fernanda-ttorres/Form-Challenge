import React from "react";
import { CardStyled } from "./Card.styled";
import Navbar from "../Micro/Navbar/Navbar";
export const Card = () => {
  return (
    <CardStyled>
      <div className="title">
        <h2>Team Sign Up</h2>
      </div>
      <Navbar />
    </CardStyled>
  );
};

export default Text;

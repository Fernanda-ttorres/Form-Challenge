import React from "react";
import { CardStyled } from "./Card.styled";
import Navbar from "../Micro/Navbar/Navbar";
import {Title} from "../Micro/Title/Title"
export const Card = () => {
  return (
    <CardStyled>
      <Title tagName={"h5"} text={"Team Sign up"}/>
      <Navbar />
    </CardStyled>
  );
};

export default Text;

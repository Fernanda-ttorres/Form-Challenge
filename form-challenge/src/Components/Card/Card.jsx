import React from "react";
import { CardStyled } from "./Card.styled";
import {Title} from "../Micro/Title/Title"

const Card = () => {
  return (
    <CardStyled>
      <Title tagName={"h5"} text={"Team Sign up"}/>
    </CardStyled>
  );
};

export default Card;

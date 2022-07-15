import React from "react";
import { CardStyled } from "./Card.styled";
import {Title} from "../Micro/Title/Title"

const Card = ({form,nav}) => {
  return (
    <CardStyled>
      <Title tagName={"h5"} text={"Team Sign up"}/>
      <div className="navbar-div">{nav}</div>
      <div>{form}</div>
    </CardStyled>
  );
};

export default Card;

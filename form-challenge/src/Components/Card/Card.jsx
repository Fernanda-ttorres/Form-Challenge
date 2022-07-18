import React from "react";
import { CardStyled } from "./Card.styled";
import {Title} from "../Micro/Title/Title"
import { useState } from "react";

const Card = ({ form, nav, page }) => {
  let tab,cardName
  if (page < 3) {
    tab = "h5";
  } else {
    tab = "sucess";
    cardName = "sucess"
  }

  return (
    <CardStyled>
      <Title tagName={"h5"} text={"Team Sign up"}/>
      <div className="navbar-div">{nav}</div>
      <div>{form}</div>
    </CardStyled>
  );
};

export default Card
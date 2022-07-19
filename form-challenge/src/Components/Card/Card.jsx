import { useState } from "react";
import {CardStyled} from './Card.styled'
import {Title} from "../Micro/Title/Title"

const Card = ({ form, nav, page }) => {
  let titleName = "h5"
  if(page === 3) {
    titleName = "sucess"
  }

  return (
    <CardStyled>
      <Title tagName={titleName} text={"Team Sign up"}/>
      <div className="navbar-div">{nav}</div>
      <div>{form}</div>
    </CardStyled>
  );
};

export default Card;
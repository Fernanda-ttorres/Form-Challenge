import React from "react";
import { CheckStyled } from "./Checkbox.styled";

export const CheckBox = ({label, error}) => {
  return (
    <CheckStyled>
      <div className="checkbox-div">
        <input type="checkbox" className="checkbox" />
        <label htmlFor="checkbox">{label}</label>
        <p className="error">{error}</p>
      </div>
      
    </CheckStyled>
  );
};

export default CheckBox;

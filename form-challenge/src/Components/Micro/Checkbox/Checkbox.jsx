import React from "react";
import { CheckStyled } from "./Checkbox.styled";

export const CheckBox = () => {
  return (
    <CheckStyled>
      <div className="checkbox-div">
        <input type="checkbox" className="checkbox" />
        <label htmlFor="checkbox">I accept the terms and privacy</label>
        <p className="error">Please confirm the terms</p>
      </div>
      
    </CheckStyled>
  );
};

export default CheckBox;

import React from "react";
import InputTag from "../Micro/InputTag/InputTag";
import { Label } from "../Micro/Label/Label";
import { CheckBoxStyled } from "./Checkbox.styled";

const CheckBox = ({ id, type, register, label}) => {    
  return (
    <CheckBoxStyled>
      <InputTag style="checkbox" id={id} type={type} register={register}/>
      <Label style="checkbox" label={label}/>
    </CheckBoxStyled>
  );
};

export default CheckBox;

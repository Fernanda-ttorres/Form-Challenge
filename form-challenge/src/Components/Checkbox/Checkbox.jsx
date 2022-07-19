import React from "react";
import InputTag from "../Micro/InputTag/InputTag";
import { Label } from "../Micro/Label/Label";
import { CheckBoxStyled, DivErrorStyled } from "./Checkbox.styled";
import ErrorMessage from '../Micro/ErrorMessage/ErrorMessage';

const CheckBox = ({ id, type, register, label, errors, text}) => {    
  return (
    <CheckBoxStyled>
      <InputTag style="checkbox" id={id} type={type} register={register}/>
      <DivErrorStyled>
        <Label style="checkbox" label={label}/> 
        <ErrorMessage errors={errors} id={id} text={text}/>
      </DivErrorStyled>
    </CheckBoxStyled>
  );
};

export default CheckBox;

import React from "react";
import InputTag from "../Micro/InputTag/InputTag";
import { Label } from "../Micro/Label/Label";
import { CheckBoxStyled } from "./Checkbox.styled";
import { useForm } from "react-hook-form";

const CheckBox = ({ id, type, container, label}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
  return (
    <CheckBoxStyled>
      <InputTag className={id} id={id} type={type} register={register}/>
      <Label id={id} label={label}/>
    </CheckBoxStyled>
  );
};

export default CheckBox;

import React from 'react';
import  {InputTagStyled}  from './InputTag.styled';

const InputTag = ({style, id, type, placeholder, register, onChange}) => {
    return (
    <InputTagStyled className={style} id={id} type={type} placeholder={placeholder} {...register(id)} onChange={onChange}/>
    );
};

export default InputTag;
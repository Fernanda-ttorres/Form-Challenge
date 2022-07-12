import React from 'react';
import  {InputTagStyled}  from './InputTag.styled';

const InputTag = ({style, id, type, placeholder, register}) => {
    return (
    <InputTagStyled className={style} id={id} type={type} placeholder={placeholder} {...register(id)} />
    );
};

export default InputTag;
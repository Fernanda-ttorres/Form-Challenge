import React from 'react';
import  {InputTagStyled}  from './InputTag.styled';

const InputTag = ({id, type, placeholder, register}) => {
    return (
            <InputTagStyled className={`${id}`}  id={id} type={type} placeholder={placeholder} {...register(id)} />
    );
};

export default InputTag;
import React from 'react';
import { InputTagStyled } from './InputTag.styled';

export const Input = ({id, type, placeholder, register}) => {
    return (
    <InputTagStyled id={id} type={type} placeholder={placeholder} {...register(id)} />
    );
};
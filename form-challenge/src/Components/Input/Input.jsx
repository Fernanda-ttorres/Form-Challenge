import React from 'react';
import {Label} from '../Micro/Label/Label'
import InputTag from '../Micro/InputTag/InputTag'
import { InputContainer } from './Input.styled';

export const Input = ({id, label, type, placeholder, register}) => {
    return (
        <InputContainer >
            <Label id={id} label={label}/>
            <InputTag className={`${id}`} id={id} type={type} placeholder={placeholder} register={register}/>
        </InputContainer>
    );
};
import React from 'react';
import {Label} from '../Micro/Label/Label'
import InputTag from '../Micro/InputTag/InputTag'
import { InputContainer } from './Input.styled';
import ErrorMessage from '../Micro/ErrorMessage/ErrorMessage';

export const Input = ({id, label, type, placeholder, register, errors, text}) => {
    return (
        <InputContainer >
            <Label style="form" label={label}/> <ErrorMessage errors={errors} id={id} text={text}/>
            <InputTag style="form" id={id} type={type} placeholder={placeholder} register={register}/>
        </InputContainer>
    );
};
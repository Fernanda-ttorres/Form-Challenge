import React from 'react';
import {InputContainer, ErrorDiv, InputStyled, LabelStyled, SpanStyled} from './Input.styled';

export const Input = ({placeholder, type, label, isError}) => {
    return (
        <InputContainer>
            <ErrorDiv>
                <LabelStyled>{label}</LabelStyled>
                <SpanStyled>{isError}</SpanStyled>
            </ErrorDiv>
            <InputStyled type={type} placeholder={placeholder}/>
        </InputContainer>
    );
};
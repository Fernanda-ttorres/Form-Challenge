import React from 'react';
import {LabelStyled} from './Label.styled';

export const Label = ({label, id}) => {
    return (
     <LabelStyled className={id}> {label}</LabelStyled>
    );
};
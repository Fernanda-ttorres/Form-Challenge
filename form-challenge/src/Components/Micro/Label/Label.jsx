import React from 'react';
import {LabelStyled} from './Label.styled';

export const Label = ({label, style}) => {
    return (
     <LabelStyled className={style}> {label}</LabelStyled>
    );
};
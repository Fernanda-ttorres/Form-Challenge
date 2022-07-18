import React from 'react';
import { TextStyled } from './Text.styled';

const Text = ({ text, container }) => {
    return (
       <TextStyled className={container} > {text} </TextStyled>
    );
};

export default Text;
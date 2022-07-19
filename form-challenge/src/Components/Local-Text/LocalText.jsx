import React from 'react';
import Text from "../Micro/Text/Text"
import { LocalStyled } from './LocalText.styled';

export const LocalText = ({title, content}) => {
    if(content !== '' ) {
        return (
            <LocalStyled>
                <Text container={"sucess"} text={title + content}/>
            </LocalStyled>
        );
    }
};
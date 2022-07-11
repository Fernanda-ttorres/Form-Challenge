import React from 'react';
import Text from '../../Micro/Text/Text';
import {Title} from '../../Micro/Title/Title';
import { HeaderContainer } from './Header.styled'


export const Header = ({tab}) => {
    return (
       <HeaderContainer>
            <Text container="header" text="Forms"/>
            <Title tagName="h2" text={tab} />
       </HeaderContainer>
    );
};

export default Header;
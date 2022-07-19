import styled from "styled-components";

export const ErrorStyled = styled.p`
    color: #FF0000;
    font-size: 0.87rem;
    line-height: 14px;
    margin: 0;
    max-width: 200px;

    @media (max-width: 768px) {
        &.error{
            display: none;
        }
    }
`;
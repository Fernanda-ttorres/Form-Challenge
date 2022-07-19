import styled from "styled-components";

export const InputTagStyled = styled.input`
    &.form{
        width: 100%;
        height: 2.5rem;
        border: none;
        border: 2px solid #AAAAAA;
        border-radius: 4px;
        padding-left: 0.75rem;

        @media (max-width: 375px) {
            height: 2.2rem;
        }
    }

    &.checkbox{
        width: 1.25rem;
        height: 1.25rem;
    }
`;
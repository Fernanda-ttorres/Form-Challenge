import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
`;

export const ErrorDiv = styled.div`
    display: flex;
    gap: 1.5rem;  
`;

export const LabelStyled = styled.label`
    font-family: 'Nunito', sans-serif;
    font-size: 0.875rem;
    line-height: 1rem;
    font-weight: 400;
    color: #767676;    
`;

export const SpanStyled = styled.span`
    font-family: 'Nunito', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: #FF0000;    
`;

export const InputStyled = styled.input`
    width: 100%;
    height: 2.12rem;
    border: none;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
    padding-left: 0.75rem;
`;
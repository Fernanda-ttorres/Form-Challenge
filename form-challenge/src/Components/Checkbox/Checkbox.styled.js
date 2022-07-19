import styled from "styled-components";

export const CheckBoxStyled = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 29rem;
    gap: 0.3rem;

    @media (max-width: 768px) {
        width: 98%;
        gap: 0.1rem;
    }
`;
export const DivErrorStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;
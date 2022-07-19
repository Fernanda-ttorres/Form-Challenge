import styled from "styled-components";

export const ContactDiv = styled.div`
    width: 32.2rem;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    column-gap: 1.5rem;
    margin: 1.75rem 0;

    @media (max-width: 768px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        gap: 1rem;
    }
`;

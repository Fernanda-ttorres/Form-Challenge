import styled from "styled-components";

export const NamesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32.2rem;
    gap: 1.75rem;

    @media (max-width: 768px) {
        width: 90%;
        gap: 1rem;
    }
`;
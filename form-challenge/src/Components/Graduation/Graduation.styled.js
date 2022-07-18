import styled from "styled-components";

export const GraduationDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32.2rem;
    gap: 3.3rem; 

    @media (max-width: 768px) {
        width: 90%;
    }
`;
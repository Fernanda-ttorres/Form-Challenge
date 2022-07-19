import styled from "styled-components";

export const GraduationDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32.2rem;
    gap: 2rem; 
    z-index: 0;
    position: absolute;
    margin-top: 150px;

    @media (max-width: 768px) {
        width: 90%;
    }
`;
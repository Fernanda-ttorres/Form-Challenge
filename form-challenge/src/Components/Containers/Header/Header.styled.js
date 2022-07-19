import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 11vh;
    background: #ECEEF2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
    padding: 1rem 0 1rem 7.37rem ;
    border-bottom: 1px solid #AAAAAA;

    @media (max-width: 768px) {
      width: 100%;
      height: 9vh;
      padding: 0.5rem 1.3rem;
    }

    @media (max-width: 375px) {
      display: none;
    }
`;

import styled from "styled-components";

export const CertificatesForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 32.2rem;
  height: 31.8rem;

  @media (max-width: 768px) {
    width: 90vw;
    height: 70.3vh;
  }
`;

export const DivBtn = styled.div`
    display: flex;
    width: 32rem;
    height: 100%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    //z-index: -1;
    //position: absolute;
   

  @media (max-width: 768px) {
    width: 90vw;
    height: 22rem;

  }

  @media (max-height: 896px) {
    height: 40vh;

  }

  @media (max-height: 667px) {
    height: 70vh;
  }

`;
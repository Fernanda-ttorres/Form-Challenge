import styled from "styled-components";

export const CertificatesForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 32.2rem;
  height: 36.8rem;

  @media (max-width: 768px) {
    width: 90vw;
    height: 80vh;
  }
`;

export const DivBtn = styled.div`
    display: flex;
    width: 100%;
    height: 20vh;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;
import styled from "styled-components";

export const BasicForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 32.2rem;
  height: 36.8rem;

  @media (max-width: 768px) {
    width: 95vw;
    height: 70vh;
  }

  @media (max-width: 375px) {
    height: 100%;
  }  

  p {
    width: 32.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;

export const DivBtn = styled.div`
  display: flex;
  width: 100%;
  height: 7vh;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 768px) {
    height: 5.5vh;
  } 
`;

export const DivCheck = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 2.2rem;

    @media (max-width: 768px) {
      width: 90%;
    }

    @media (max-width: 375px) {
      width: 95%;
      margin-top: 0.5rem;
    }
`;
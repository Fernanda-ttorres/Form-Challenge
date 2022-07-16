import styled from "styled-components";

export const CardStyled = styled.section`
  h5 {
    display: flex;
    width: 100%;
    padding-left: 3rem;
    margin-top: 3.5rem;
    margin-bottom: 2.0625rem;

    @media (max-width: 375px) {
      font-size: 1rem;
      padding-left: 1rem ;
    }
  }
  
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 38.563rem;
  height: 46.188rem;
  margin: 6.06rem auto 0 auto;
  border-radius: 20px;

  &.sucess{
    height: 34.6875rem;
  }

  
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    margin: 0;
    border-radius: 0;     
  }
`;

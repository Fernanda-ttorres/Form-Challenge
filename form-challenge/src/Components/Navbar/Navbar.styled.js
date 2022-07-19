import styled from "styled-components";

export const NavStyled = styled.div`
  .navbar-div {
      width: 33rem;
      @media (max-width: 768px) {
        width: 85vw;
      }

      @media (max-width: 375px) {
        width: 95vw;
      }

   }
  .sucess {
    display: none;
  }
  .nav {
    display: flex;
    flex-direction: row;
  }
  
  .tab {
    display: flex;
    width: 100%;
    justify-content: space-around;
    border-bottom: 2px solid #AAAAAA;
    cursor: pointer;
    margin-bottom: 2rem;

    @media (max-width: 375px) {
      margin-bottom: 1rem;
    }
  }
  #true {
    p {
      margin-bottom: 0;
    }
    border-bottom: 2px solid #074EE8;
  }
`;
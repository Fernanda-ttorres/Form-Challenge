import styled from "styled-components";

export const NavStyled = styled.div`
  .navbar-div {
    width: 515px;
  }
  .nav {
    display: flex;
    flex-direction: row;
  }

  p {
    display: flex;
    cursor: pointer;
    margin: 0px;
    justify-content: center;
    width: 171px;
    padding-bottom: 0.8125rem;

  }

  .true {
    color: #074ee8;
    border-bottom: 3px solid #074ee8;
    
  }

  .false {
    border-bottom: 2px solid #aaaaaa;
  }
`;

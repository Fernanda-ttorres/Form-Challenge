import styled from "styled-components";

export const CheckStyled = styled.div`
  .checkbox-div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    height: 1.75rem;
  }

  input {
    width: 1.25rem;
    height: 1.25rem;
  }

  label {
    padding-left: 0.2rem;
    font-weight: 400;
    font-size: 1rem;
  }

  .error {
   margin: 0;
   margin-left: 1.625rem;
   color: #ff0000;
   font-size: 0.875rem;
  }
`;

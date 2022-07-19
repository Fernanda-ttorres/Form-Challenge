import styled from "styled-components";

export const TagH2Styled = styled.h2`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: #074EE8;
    line-height: 2rem;
    margin-block: 0;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 1rem;
    }
`;

export const TagH5Styled = styled.h5`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #111111;
    line-height: 1rem;
    margin-block: 0;

    @media (max-width: 375px) {
      font-size: 0.5rem;
      line-height: 0;
    }
`;
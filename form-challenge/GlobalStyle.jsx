import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    user-select: none;
}
body, html, #root{
	height: 100%;
	padding: 0;
	margin: 0;
    background: #ECEEF2;

    @media (max-width: 768px) {
        background-color: #ffffff;
  }
}
`;
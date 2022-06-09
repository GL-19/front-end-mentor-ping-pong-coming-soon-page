import { createGlobalStyle } from "styled-components";

export const mediaQuery = {
	desktop: "1080px",
	tablet: "720px",
	mobile: "420px",
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media screen and (max-width: ${mediaQuery.desktop}) {
      font-size: 93.75%;
    }

    @media screen and (max-width: ${mediaQuery.mobile}) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: "Libre Franklyn";
  }
`;

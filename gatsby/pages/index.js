import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { mediaQuery } from "../..";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #E7E8F8;
    font-family: "Arial", sans-serif;
  }
`;

const Copyright = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 13px;
  font-weight: bold;
  color: #c7cbef;
  text-transform: uppercase;

  ${mediaQuery("tablet")`
    background: red;
  `}

  a {
    text-decoration: none;
    color: #c7cbef;

    &:hover {
      color: #5a2cc9;
    }
  }
`;

export default () => {

  return (
    <>
      <GlobalStyle />
      <Copyright>
        react-styled-mediaqueries
        <a href="http://www.github.com/pixelize/react-styled-mediaquery">
          GITHUB
        </a>
      </Copyright>
    </>
  );
};

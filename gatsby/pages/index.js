import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
import { mediaQuery } from "../.."

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #E7E8F8;
    font-family: "Arial", sans-serif;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Copyright = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 13px;
  font-weight: bold;
  color: #c7cbef;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: #c7cbef;
    &:hover {
      color: #5a2cc9;
    }
  }
`

const Card = styled.div`
  box-shadow: rgba(25, 80, 137, 0.08) 0px 4px 8px -1px,
    rgba(0, 128, 255, 0.06) 0px 8px 24px -2px;
  background: #fff;
  border-radius: 6px;
  width: 500px;
  margin: 0 auto;
  height: 10%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const BelowTablet = styled(Card)`
  background: red;

  ${mediaQuery("<", "tablet")`
    background: blue;
  `}
`

const BelowTabletIn = styled(Card)`
  background: red;

  ${mediaQuery("<=", "tablet")`
    background: orange;
  `}
`

const AdoveTablet = styled(Card)`
  background: red;

  ${mediaQuery(">", "tablet")`
    background: purple;
  `}
`

const AdoveTabletIn = styled(Card)`
  background: red;

  ${mediaQuery(">=", "tablet")`
    background: lime;
  `}
`
export default () => {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Copyright>
          react-styled-mediaquery - <a href="http://www.github.com/pixelize/react-styled-mediaquery">GITHUB</a>
        </Copyright>
        <BelowTablet>I'm blue below tablet breakpoint(768px)</BelowTablet>
        <BelowTabletIn>I'm orange when i hit tablet breakpoint(768px) and below</BelowTabletIn>
        <AdoveTablet>I'm purple when i'm above tablet breakpoint(768px)</AdoveTablet>
        <AdoveTabletIn>I'm lime when i hit tablet breakpoint(768px) and above</AdoveTabletIn>
      </Container>
    </>
  );
};

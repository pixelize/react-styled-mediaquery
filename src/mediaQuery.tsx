import { css } from "styled-components";

const devices: { [key: string]: string } = {
  mobile: "412px",
  phablet: "600px",
  tablet: "768px",
  desktop: "1024px"
};

type Condition = ">" | ">=" | "<" | "<=" | "between";

export const mediaQuery = (
  condition: Condition,
  breakpoint: string,
  breakpoint2?: string
) => {
  const deviceCheck = devices[breakpoint] || breakpoint;

  switch (condition) {
    case ">":
      return (...args: any) => css`
          @media only screen and (min-width: calc(${deviceCheck} + 1px)) {
            ${css.call(undefined, ...args)}
          }
        `;
    case ">=":
      return (...args: any) => css`
        @media only screen and (min-width: ${deviceCheck}) {
          ${css.call(undefined, ...args)}
        }
      `;
    case "<":
      return (...args: any) => css`
          @media only screen and (max-width: calc(${deviceCheck} - 1px)) {
            ${css.call(undefined, ...args)}
          }
        `;
    case "<=":
      return (...args: any) => css`
        @media only screen and (max-width: ${deviceCheck}) {
          ${css.call(undefined, ...args)}
        }
      `;
    case "between":
      return (...args: any) => css`
        @media (min-width: ${deviceCheck}) and (max-width: ${devices[
            breakpoint2
          ] || breakpoint2}) {
            ${css.call(undefined, ...args)}
        }
      `;
  }
};


# react-styled-mediaquery

## Description

`react-styled-mediaquery` is a simple and practical function for managing media queries in react with styled components.

### Demo

[Github page](https://pixelize.github.io/react-styled-mediaquery/)

Also: See example folder in `gatsby/pages`. You can run it locally using [Gatsby](https://www.gatsbyjs.org/) just clone the repos and use `yarn start` in your CLI. Demo is running on `localhost:8000`

## Installation

| yarn | npm
| -------------------- | -------------------------------------- |
| yarn add react-styled-mediaquery   | npm add react-styled-mediaquery |

## Usage

```jsx
import React, { useState } from "react";
import { mediaQuery } from "react-styled-mediaquery";

const  Card  =  styled.div`
  background: red;

  ${mediaQuery("<", "tablet")`
    background: blue;
  `}

  ${mediaQuery(">", "desktop")`
    background: red;
  `}
`

const App = () => {
  return (
    <div>
      <Card>hello world</Card>
    </div>
  )
}
```

## Conditions & default breakpoints

You can either use the default breakpoints shortcuts using the string `mobile | phablet | tablet | desktop`. Just mix you condition and breakpoint as you wish !

### >
Element will be blue above the tablet breakpoint
```jsx
${mediaQuery(">", "tablet")`
  background: blue;
`}
```

### =>
Element will be blue above & including the mobile breakpoint

```jsx
${mediaQuery("=>", "mobile")`
  background: blue;
`}
```

### <
Element will be blue below desktop breakpoints

```jsx
${mediaQuery("<", "desktop")`
  background: blue;
`}
```

### <=
Element will be blue below & including the phablet breakpoint

```jsx
${mediaQuery("<=", "phablet")`
  background: blue;
`}
```

## Custom Breakpoints

These are the default settings, you can overwrite with your own breakpoints

```jsx
const devices = {
  mobile: "412px",
  phablet: "600px",
  tablet: "768px",
  desktop: "1024px"
};
```

You can also use the function with a custom declarative breakpoint in pixel i.e:
```jsx
${mediaQuery("<", "638px")`
  background: blue;
`}
```

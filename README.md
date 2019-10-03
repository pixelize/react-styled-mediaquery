
# react-slider-measure


## Description

`react-styled-mediaquery` is a simple and practical utility for managing media queries in react with styled components.

### Demo

[Github page](github.com/pixelize)

Also: see example folder. You can run it locally using [Gatsby](https://www.gatsbyjs.org/) just clone the repos and use `yarn start` in your CLI.

## Installation

| yarn | npm
| -------------------- | -------------------------------------- |
| yarn add react-styled-mediaquery   | npm add react-styled-mediaquery |

## Usage

```js
import React, { useState } from "react";
import { mediaQuery } from "react-styled-mediaquery";

const  BelowTablet  =  styled(Card)`
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

You can either use the default breakpoints shortcuts using the string `mobile | phablet | tablet | desktop`

### >
Element will be blue above the tablet breakpoint

    ${mediaQuery("<", "tablet")`
    	background: blue;
    `}
### =>
Element will be blue above & including the tablet breakpoint

    ${mediaQuery("<", "tablet")`
    	background: blue;
    `}
### <
Element will be blue below

    ${mediaQuery("<", "tablet")`
    	background: blue;
    `}

### <=
Element will be blue below & including the tablet breakpoint

    ${mediaQuery("<", "tablet")`
    	background: blue;
    `}
## Custom Breakpoints

These are the default settings, you can overwrite with your own breakpoints

    const devices = {
	    mobile: "412px",
	    phablet: "600px",
	    tablet: "768px",
	    desktop: "1024px"
    };

You can also you with a declaration breakpoints in pixel i.e:

    ${mediaQuery("<", "638px")`
    	background: blue;
    `}



import React from "react"

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/styles/normalize.css"
// custom CSS styles
// import "./src/styles/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import "./src/styles/global.css"

export const wrapPageElement = ({ element }) => <>{element}</>

export const wrapRootElement = ({ element }) => <>{element}</>

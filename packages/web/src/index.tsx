import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./containers/App";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body,
body > div {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: #f0f0f0;
}
`;

createRoot(document.body.appendChild(document.createElement("div"))).render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>
);

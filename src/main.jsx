import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import palette from "./global/palette";
import GlobalStyle from "./global/styles";

import { Routes } from "./routes/index";
import { SeshProvider } from "./hooks/session";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={palette}>
      <GlobalStyle />
      <SeshProvider>
        <Routes />
      </SeshProvider>
    </ThemeProvider>
  </React.StrictMode>
);

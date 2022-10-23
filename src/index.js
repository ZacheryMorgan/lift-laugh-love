import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";

let theme = createTheme({
  typography: {
    fontFamily: "Raleway",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 910,
      lg: 1240,
      xl: 1536,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

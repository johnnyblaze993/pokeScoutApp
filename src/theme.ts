// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            background: {
              default: "#121212",  // dark gray background
              paper: "#1e1e1e",     // slightly lighter for cards/dialogs
            },
            text: {
              primary: "#ffffff",   // ensure white text on dark
            },
            primary: {
              main: "#66ff66",
            },
          }
        : {
            background: {
              default: "#f5f5f5",
              paper: "#ffffff",
            },
            text: {
              primary: "#000000",
            },
            primary: {
              main: "#2e7d32",
            },
          }),
    },
  });

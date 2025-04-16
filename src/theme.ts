import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            primary: {
              main: "#66ff66",
            },
          }
        : {
            background: {
              default: "#f5f5f5",
              paper: "#fff",
            },
            primary: {
              main: "#2e7d32",
            },
          }),
    },
  });

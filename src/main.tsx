
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getAppTheme } from "./theme";
import { useThemeStore } from "./store/themeStore";
import "./styles/global.css";

const Root = () => {
  const mode = useThemeStore((state) => state.mode);
  const theme = getAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);

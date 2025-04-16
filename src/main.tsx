import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getAppTheme } from "./theme";
import { useThemeStore } from "./store/themeStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/global.css";

const queryClient = new QueryClient();

const Root = () => {
  const mode = useThemeStore((state) => state.mode);
  const theme = getAppTheme(mode);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);

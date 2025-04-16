import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeStore } from "../../store/themeStore";
import { Link } from "react-router-dom";

const Header = () => {
  const mode = useThemeStore((state) => state.mode);
  const toggle = useThemeStore((state) => state.toggleTheme);

  return (
    <AppBar position="sticky" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          component={Link}
          to="/"
        >
          PokéScout
        </Typography>
        <IconButton onClick={toggle} color="inherit">
          {mode === "light" ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

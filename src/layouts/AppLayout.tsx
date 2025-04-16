import { Box, Container, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 2,
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};

export default AppLayout;

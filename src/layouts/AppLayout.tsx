import { Box, Container, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const theme = useTheme();

  return (
    <Box
    sx={{
      minHeight: "100vh", // ✅ allow full height + scroll
      width: "100%",
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      overflowX: "hidden", // ✅ only hide horizontal scroll
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

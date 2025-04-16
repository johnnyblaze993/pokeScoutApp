import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Box sx={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Container
        maxWidth="lg"
        sx={{
          pt: 2,
          height: "calc(100vh - 64px)", // Subtract AppBar height
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

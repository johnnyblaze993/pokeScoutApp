import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography variant="h3" gutterBottom>
        🏠 Welcome to PokéScout!
      </Typography>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/pokemon"
        >
          Browse Pokémon
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/team-builder"
        >
          Team Builder
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/favorites"
        >
          Favorites
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;

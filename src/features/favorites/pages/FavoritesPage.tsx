import BackButton from "../../../components/Buttons/BackButton"
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useFavoritesStore } from "../../../store/favoriteStore";

const FavoritesPage = () => {
  const { favorites } = useFavoritesStore();

  if (favorites.length === 0) {
    return <Typography>No favorites yet. ❤️</Typography>;
  }

  return (
    <>
      <BackButton />
      <Typography variant="h4" gutterBottom>
        ⭐ Your Favorite Pokémon
      </Typography>

      <Grid container spacing={2}>
        {favorites.map((name) => (
          <Grid key={name} size={{ xs: 6, sm: 4, md: 3 }} component="div">
            <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "#eeeeee",
                  padding: "1rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                  {name}
                </Typography>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FavoritesPage;

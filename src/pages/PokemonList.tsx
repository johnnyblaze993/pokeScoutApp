import BackButton from "../components/Buttons/BackButton";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { usePokemonList } from "../features/pokemon/hooks";

const PokemonList = () => {
  const { data, isLoading, error } = usePokemonList();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error || !data) return <Typography>Error loading Pokémon.</Typography>;

  return (
    <>
      <BackButton />
      <Typography variant="h4" gutterBottom>
        📋 Browse Pokémon
      </Typography>

      <Grid container spacing={2}>
        {data.results.map((pokemon) => (
          <Grid
            key={pokemon.name}
            size={{ xs: 6, sm: 4, md: 3 }}
            component="div"
          >
            <Link
              to={`/pokemon/${pokemon.name}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#eeeeee",
                  padding: "1rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                <Typography variant="h6">{pokemon.name}</Typography>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PokemonList;

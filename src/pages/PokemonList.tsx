import BackButton from "../components/Buttons/BackButton";
import { useState, useEffect } from "react";
import { Typography, Button, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { usePokemonList } from "../features/pokemon/hooks";

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const [allPokemon, setAllPokemon] = useState<{ name: string; url: string }[]>([]);

  const { data, isLoading, isFetching, error } = usePokemonList(20, offset);

  useEffect(() => {
    if (data?.results) {
      setAllPokemon((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  if (isLoading && offset === 0) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading Pokémon.</Typography>;

  return (
    <>
      <BackButton />
      <Typography variant="h4" gutterBottom>
        📋 Browse Pokémon
      </Typography>

      <Grid container spacing={2}>
        {allPokemon.map((pokemon) => (
          <Grid
            key={pokemon.name}
            size={{ xs: 12, sm: 6, md: 3 }}
            component="div"
          >
            <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: "none" }}>
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

      {data?.next && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <Button
            variant="contained"
            onClick={() => setOffset((prev) => prev + 20)}
            disabled={isFetching}
          >
            {isFetching ? <CircularProgress size={20} /> : "Load More"}
          </Button>
        </div>
      )}
    </>
  );
};

export default PokemonList;

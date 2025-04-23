import FavoriteButton from "../../favorites/components/FavoriteButton";
import BackButton from "../../../components/Buttons/BackButton";
import { useState, useEffect } from "react";
import { Typography, Button, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { usePokemonList } from "../hooks";
import TeamBuilderButton from "../../teamBuilder/components/TeamBuilderButton";

const extractIdFromUrl = (url: string) => {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1]; // The last part is the ID
}



const PokemonList = () => {
  const navigate = useNavigate();
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

      <div style={{ height: "calc(100vh - 150px)", overflowY: "auto", padding: ".5rem" }}>
        <Grid container spacing={2}>
          {allPokemon.map((pokemon) => {
            const id = extractIdFromUrl(pokemon.url);
            const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return (
              <Grid key={pokemon.name} size={{ xs: 6, sm: 4, md: 3 }} component="div">
                <div
                  style={{
                    background: "#eeeeee",
                    padding: "1rem",
                    borderRadius: "8px",
                    textAlign: "center",
                    color: "black",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/pokemon/${pokemon.name}`)}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "0.5rem",
                      right: "0.5rem",
                      zIndex: 2,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <TeamBuilderButton name={pokemon.name} />
                    <FavoriteButton name={pokemon.name} />
                  </div>

                  <img
                    src={spriteUrl}
                    alt={pokemon.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                    {pokemon.name}
                  </Typography>
                </div>
              </Grid>
            );
          })}
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
      </div>
    </>
  );
};

export default PokemonList;

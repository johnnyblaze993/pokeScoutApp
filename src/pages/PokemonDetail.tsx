import { Typography, CircularProgress, Chip, Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { usePokemonById } from "../features/pokemon/hooks";
import BackButton from "../components/Buttons/BackButton";

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = usePokemonById(id || "");

  if (isLoading) return <CircularProgress />;
  if (error || !data) return <Typography>Error loading Pokémon details.</Typography>;

  const spriteUrl =
  (data.sprites as any)?.other?.["official-artwork"]?.front_default ||
  (data.sprites as any)?.front_default ||
  "";
  const capitalizedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

  return (
    <>
    <BackButton />
    <Box sx={{ textAlign: "center", mt: 2 }}>
      {spriteUrl && (
        <img
          src={spriteUrl}
          alt={data.name}
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
      )}
      <Typography variant="h4" sx={{ mt: 2 }}>
        {capitalizedName}
      </Typography>

      {/* Types */}
      <Box sx={{ mt: 2 }}>
        {data.types.map(({ type }) => (
          <Chip
            key={type.name}
            label={type.name.toUpperCase()}
            color="primary"
            sx={{ margin: "0.5rem" }}
          />
        ))}
      </Box>

      {/* Abilities */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Abilities:
        </Typography>
        {data.abilities.map(({ ability }) => (
          <Typography key={ability.name}>{ability.name}</Typography>
        ))}
      </Box>

      {/* Base Stats */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Base Stats:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {data.stats.map(({ base_stat, stat }) => (
            <Grid key={stat.name} size={{ xs: 6, sm: 4, md: 3 }} component="div">
              <Typography>{stat.name.toUpperCase()}: {base_stat}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </>
  );
};

export default PokemonDetail;

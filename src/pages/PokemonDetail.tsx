import { Typography, CircularProgress, Chip, Box, LinearProgress } from "@mui/material";
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
        <Box sx={{ mt: 4, width: "100%", maxWidth: "600px", margin: "auto" }}>
          <Typography variant="h6" gutterBottom textAlign="center">
            Base Stats:
          </Typography>

          {data.stats.map(({ base_stat, stat }) => (
            <Box key={stat.name} sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                {stat.name.toUpperCase()}: {base_stat}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={Math.min(base_stat, 100)} // Bars are capped at 100%
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "grey.300",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "primary.main",
                  },
                }}
              />
            </Box>
          ))}
        </Box>

      </Box>
    </>
  );
};

export default PokemonDetail;

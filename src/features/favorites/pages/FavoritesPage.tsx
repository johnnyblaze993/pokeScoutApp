import BackButton from "../../../components/Buttons/BackButton";
import { Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFavoritesStore } from "../store/favoriteStore";
import TeamBuilderButton from "../../teamBuilder/components/TeamBuilderButton";
import { useTeamStore } from "../../teamBuilder/store/teamStore";

const FavoritesPage = () => {
	const { favorites } = useFavoritesStore();
	const { isInTeam } = useTeamStore();

	const navigate = useNavigate();

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
						<div
							onClick={() => navigate(`/pokemon/${name}`)}
							style={{
								background: isInTeam(name) ? "#d4edda" : "#f0f0f0", // Light green for favorite, gray otherwise
								padding: "1rem",
								borderRadius: "8px",
								textAlign: "center",
								color: "black",
								position: "relative",
								cursor: "pointer",
							}}
						>
							<div
								style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
								// onClick={(e) => e.stopPropagation()} // 🧠 Prevent card click
							>
								<TeamBuilderButton name={name} />
							</div>

							<Typography variant="h6" sx={{ textTransform: "capitalize" }}>
								{name}
							</Typography>
						</div>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default FavoritesPage;

import { usePokemonByName } from "../../pokemon/hooks";
import { Typography } from "@mui/material";
import { useTeamStore } from "../store/teamStore";

interface Props {
	name: string;
}

const TeamCard = ({ name }: Props) => {
	const { data: pokemon } = usePokemonByName(name);
	const { removeFromTeam } = useTeamStore();

	if (!pokemon) return null;

	const spriteUrl =
		pokemon.sprites.other?.["official-artwork"]?.front_default ??
		pokemon.sprites.front_default ??
		"";

	return (
		<div
			style={{
				background: "#eeeeee",
				padding: "1rem",
				borderRadius: "8px",
				textAlign: "center",
				position: "relative",
			}}
		>
			<img
				src={spriteUrl}
				alt={pokemon.name}
				style={{ width: 100, height: 100 }}
			/>

			<Typography
				variant="h6"
				sx={{ textTransform: "capitalize", color: "black" }}
			>
				{pokemon.name}
			</Typography>

			<button
				onClick={() => removeFromTeam(name)}
				style={{
					position: "absolute",
					top: "0.5rem",
					right: "0.5rem",
					background: "red",
					color: "white",
					border: "none",
					borderRadius: "50%",
					width: "24px",
					height: "24px",
					cursor: "pointer",
				}}
			>
				❌
			</button>
		</div>
	);
};

export default TeamCard;

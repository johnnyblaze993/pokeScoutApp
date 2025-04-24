import { useTeamStore } from "../store/teamStore";
import { Typography, Grid } from "@mui/material";
import BackButton from "../../../components/Buttons/BackButton";
import TeamCard from "../components/Teamcard";
import TeamAggregator from "../components/TeamAggregator";

const TeamBuilderPage = () => {
	const { team } = useTeamStore();

	if (team.length === 0) {
		return (
			<>
				<BackButton />
				<Typography variant="h4">👥 Team Builder</Typography>
				<Typography>
					No team members yet. Add some from the list or favorites!
				</Typography>
			</>
		);
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "flex-start",
				height: "calc(100vh - 150px)",
				padding: "1rem",
				gap: "1rem",
			}}
		>
			{/* Left Section: Team Cards */}
			<div style={{ flex: 1.5, overflowY: "auto" }}>
				{" "}
				{/* Reduced flex value */}
				<BackButton />
				<Typography variant="h4" gutterBottom>
					👥 Your Team
				</Typography>
				<Grid container spacing={2}>
					{team.map((name) => (
						<Grid key={name} size={{ xs: 6, sm: 4, md: 3 }} component="div">
							<TeamCard name={name} />
						</Grid>
					))}
				</Grid>
			</div>

			{/* Right Section: Type Synergy */}
			<div style={{ flex: 2, overflowY: "auto" }}>
				{" "}
				{/* Increased flex value */}
				<TeamAggregator />
			</div>
		</div>
	);
};

export default TeamBuilderPage;

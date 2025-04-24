import { useTeamStore } from "../store/teamStore";
import { Typography, Grid } from "@mui/material";
import BackButton from "../../../components/Buttons/BackButton";
import TeamCard from "../components/Teamcard";

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
		<>
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
		</>
	);
};

export default TeamBuilderPage;

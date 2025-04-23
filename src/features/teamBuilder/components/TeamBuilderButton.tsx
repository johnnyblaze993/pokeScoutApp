import { IconButton, Tooltip } from "@mui/material";
import { AddCircle, CheckCircle } from "@mui/icons-material";
import { useTeamStore } from "../store/teamStore";

interface Props {
	name: string;
}

const TeamBuilderButton = ({ name }: Props) => {
	const { isInTeam, addToTeam, removeFromTeam } = useTeamStore();

	const alreadyInTeam = isInTeam(name);

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation(); // Prevent card click if this is inside
		if (alreadyInTeam) {
			removeFromTeam(name);
		} else {
			addToTeam(name);
		}
	};

	return (
		<div onClick={handleClick}>
			<Tooltip title={alreadyInTeam ? "Remove from team" : "Add to team"}>
				<IconButton color="success">
					{alreadyInTeam ? <CheckCircle /> : <AddCircle />}
				</IconButton>
			</Tooltip>
		</div>
	);
};

export default TeamBuilderButton;

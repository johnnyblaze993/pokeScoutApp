import { useTeamStore } from "../store/teamStore";
import { useState } from "react";
import { Pokemon } from "../../pokemon/types";
import TypeCoverageVisualizer from "./TypeCoverageVisualizer";
import TeamStatsFetcher from "./TeamStatsFetcher";

const TeamAggregator = () => {
	const { team } = useTeamStore();
	const [teamData, setTeamData] = useState<Pokemon[]>([]);

	const handleLoad = (pokemon: Pokemon) => {
		setTeamData((prev) => {
			const alreadyInList = prev.some((p) => p.name === pokemon.name);
			return alreadyInList ? prev : [...prev, pokemon];
		});
	};

	return (
		<div
			style={{
				height: "calc(100vh - 150px)",
				width: "100%", // Ensure the container takes the full width
				overflowX: "hidden", // Prevent horizontal scrolling
				padding: "1rem",
				boxSizing: "border-box", // Include padding in width calculation
			}}
		>
			{team.map((name) => (
				<TeamStatsFetcher key={name} name={name} onLoad={handleLoad} />
			))}
			{teamData.length > 0 && <TypeCoverageVisualizer team={teamData} />}
		</div>
	);
};

export default TeamAggregator;

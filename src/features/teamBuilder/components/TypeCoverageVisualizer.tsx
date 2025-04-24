import { useEffect, useState } from "react";
import { Typography, LinearProgress, Stack, Chip } from "@mui/material";
import { calculateTypeSynergy } from "../utils/typeSynergy";
import { Pokemon } from "../../pokemon/types";

interface Props {
	team: Pokemon[];
}

const TypeCoverageVisualizer = ({ team }: Props) => {
	const [offense, setOffense] = useState<Record<string, number>>({});
	const [defense, setDefense] = useState<Record<string, number>>({});

	useEffect(() => {
		const getSynergy = async () => {
			const teamTypes = team.map((p) => p.types.map((t) => t.type.name));
			const { offensiveCoverage, defensiveWeaknesses } =
				await calculateTypeSynergy(teamTypes);
			setOffense(offensiveCoverage);
			setDefense(defensiveWeaknesses);
		};

		if (team.length > 0) getSynergy();
	}, [team]);

	const renderMap = (map: Record<string, number>, label: string) => (
		<>
			<Typography variant="h6" gutterBottom>
				{label}
			</Typography>
			<Stack spacing={1}>
				{Object.entries(map)
					.sort((a, b) => b[1] - a[1])
					.map(([type, count]) => (
						<div key={type}>
							<Stack direction="row" alignItems="center" spacing={1}>
								<Chip label={type.toUpperCase()} />
								<Typography variant="body2">{count} Pokémon</Typography>
							</Stack>
							<LinearProgress
								variant="determinate"
								value={(count / team.length) * 100}
								sx={{ height: 6, borderRadius: 1 }}
							/>
						</div>
					))}
			</Stack>
		</>
	);

	return (
		<div style={{ marginTop: "2rem" }}>
			{renderMap(offense, "🧠 Offensive Coverage")}
			<div style={{ marginTop: "2rem" }} />
			{renderMap(defense, "❌ Defensive Weaknesses")}
		</div>
	);
};

export default TypeCoverageVisualizer;

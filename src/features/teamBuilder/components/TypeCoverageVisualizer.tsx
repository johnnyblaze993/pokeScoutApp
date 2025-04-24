import {
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { Typography, Stack, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { Pokemon } from "../../pokemon/types";
import { calculateTypeSynergy } from "../utils/typeSynergy";

interface Props {
	team: Pokemon[];
}

const OVEREXPOSED_THRESHOLD = 2;

const TypeCoverageVisualizer = ({ team }: Props) => {
	const [data, setData] = useState<unknown[]>([]);
	const [warnings, setWarnings] = useState<string[]>([]);

	useEffect(() => {
		const getSynergy = async () => {
			const teamTypes = team.map((p) => p.types.map((t) => t.type.name));
			const { offensiveCoverage, defensiveWeaknesses } =
				await calculateTypeSynergy(teamTypes);

			const allTypes = Array.from(
				new Set([
					...Object.keys(offensiveCoverage),
					...Object.keys(defensiveWeaknesses),
				])
			);

			const chartData = allTypes.map((type) => {
				return {
					type,
					offense: offensiveCoverage[type] || 0,
					defense: defensiveWeaknesses[type] || 0,
				};
			});

			const overExposed = Object.entries(defensiveWeaknesses)
				.filter(([, count]) => count >= OVEREXPOSED_THRESHOLD)
				.map(([type]) => type.toUpperCase());

			setWarnings(overExposed);
			setData(chartData);
		};

		getSynergy();
	}, [team]);

	return (
		<div style={{ marginTop: "2rem" }}>
			<Typography variant="h6" gutterBottom>
				📊 Type Synergy
			</Typography>

			{warnings.length > 0 && (
				<Stack spacing={1} mb={2}>
					<Typography color="error">⚠️ Overexposed to:</Typography>
					<Stack direction="row" spacing={1}>
						{warnings.map((type) => (
							<Chip key={type} label={type} color="error" />
						))}
					</Stack>
				</Stack>
			)}

			<ResponsiveContainer width="100%" height={400}>
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="type" />
					<Radar
						name="Offense"
						dataKey="offense"
						stroke="#4caf50"
						fill="#4caf50"
						fillOpacity={0.6}
					/>
					<Radar
						name="Weakness"
						dataKey="defense"
						stroke="#f44336"
						fill="#f44336"
						fillOpacity={0.3}
					/>
					<Legend />
					<Tooltip />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default TypeCoverageVisualizer;

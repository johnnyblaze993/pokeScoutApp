import { usePokemonByName } from "../../pokemon/hooks";
import { useEffect } from "react";
import { Pokemon } from "../../pokemon/types";

interface Props {
	name: string;
	onLoad: (pokemon: Pokemon) => void;
}

const TeamStatsFetcher = ({ name, onLoad }: Props) => {
	const { data } = usePokemonByName(name);

	useEffect(() => {
		if (data) onLoad(data);
	}, [data, onLoad]);

	return null; // 👻 No UI rendered — just data collection
};

export default TeamStatsFetcher;

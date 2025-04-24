import { TypeRelation } from "../../pokemon/types";
import { getTypeData } from "../../../api/pokemonApi";

export const calculateTypeSynergy = async (teamTypes: string[][]) => {
	const offensiveMap: Record<string, number> = {};
	const defensiveMap: Record<string, number> = {};
	const seenTypes = new Set<string>();

	for (const typeGroup of teamTypes) {
		for (const typeName of typeGroup) {
			// Avoid fetching the same type multiple times
			if (seenTypes.has(typeName)) continue;
			seenTypes.add(typeName);

			try {
				const data = await getTypeData(typeName);
				const relations: TypeRelation = data;

				// Offensive coverage (double damage to others)
				relations.damage_relations.double_damage_to.forEach((type) => {
					offensiveMap[type.name] = (offensiveMap[type.name] || 0) + 1;
				});

				// Defensive weaknesses (double damage from others)
				relations.damage_relations.double_damage_from.forEach((type) => {
					defensiveMap[type.name] = (defensiveMap[type.name] || 0) + 1;
				});
			} catch (err) {
				console.error(`Failed to fetch type data for ${typeName}`, err);
			}
		}
	}

	return {
		offensiveCoverage: offensiveMap,
		defensiveWeaknesses: defensiveMap,
	};
};

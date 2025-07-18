import { z } from "zod";

//used in pokemon details
export const PokemonType = z.object({
	slot: z.number(),
	type: z.object({
		name: z.string(),
		url: z.string(),
	}),
});

export const PokemonAbility = z.object({
	ability: z.object({
		name: z.string(),
		url: z.string(),
	}),
	is_hidden: z.boolean(),
	slot: z.number(),
});

export const PokemonStat = z.object({
	base_stat: z.number(),
	stat: z.object({
		name: z.string(),
		url: z.string(),
	}),
});

export const PokemonSchema = z.object({
	id: z.number(),
	name: z.string(),
	sprites: z.object({
		front_default: z.string().nullable(),
		other: z
			.object({
				"official-artwork": z.object({
					front_default: z.string().nullable(),
				}),
			})
			.optional(),
	}),
	types: z.array(PokemonType),
	abilities: z.array(PokemonAbility),
	stats: z.array(PokemonStat),
});

export type Pokemon = z.infer<typeof PokemonSchema>;

//used in Pokemon list
// The result item (summary of a single Pokémon in the list)
export const PokemonListResult = z.object({
	name: z.string(),
	url: z.string(),
});

// The full response from the /pokemon endpoint
export const PokemonListResponseSchema = z.object({
	count: z.number(),
	next: z.string().nullable(),
	previous: z.string().nullable(),
	results: z.array(PokemonListResult),
});

export type PokemonListResponse = z.infer<typeof PokemonListResponseSchema>;
export type PokemonListItem = z.infer<typeof PokemonListResult>;

export const TypeRelationSchema = z.object({
	damage_relations: z.object({
		double_damage_to: z.array(z.object({ name: z.string(), url: z.string() })),
		double_damage_from: z.array(
			z.object({ name: z.string(), url: z.string() })
		),
		half_damage_from: z.array(z.object({ name: z.string(), url: z.string() })),
		no_damage_from: z.array(z.object({ name: z.string(), url: z.string() })),
	}),
});

export type TypeRelation = z.infer<typeof TypeRelationSchema>;

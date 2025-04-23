import {
	PokemonSchema,
	PokemonListResponseSchema,
	PokemonListResponse,
} from "../features/pokemon/types";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonById = async (id: string | number) => {
	const res = await fetch(`${BASE_URL}/pokemon/${id}`);
	if (!res.ok) throw new Error("Failed to fetch Pokémon");

	const data = await res.json();
	const parsed = PokemonSchema.safeParse(data);

	if (!parsed.success) {
		console.error(parsed.error.format());
		throw new Error("Invalid Pokémon data");
	}

	return parsed.data;
};

// Get list of Pokémon (limit + offset for pagination)
export const getAllPokemon = async (
	limit = 20,
	offset = 0
): Promise<PokemonListResponse> => {
	const res = await fetch(
		`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
	);
	if (!res.ok) throw new Error("Failed to fetch Pokémon list");

	const data = await res.json();
	const parsed = PokemonListResponseSchema.safeParse(data);

	if (!parsed.success) {
		console.error(parsed.error.format());
		throw new Error("Invalid Pokémon list data");
	}

	return parsed.data;
};

export const getPokemonByName = async (name: string) => {
	const res = await fetch(`${BASE_URL}/pokemon/${name}`);
	if (!res.ok) throw new Error("Failed to fetch Pokémon by name");

	const data = await res.json();
	const parsed = PokemonSchema.safeParse(data);

	if (!parsed.success) {
		console.error(parsed.error.format());
		throw new Error("Invalid Pokémon data");
	}

	return parsed.data;
};

import axios from "axios";
import {
	PokemonSchema,
	PokemonListResponseSchema,
	PokemonListResponse,
} from "../features/pokemon/types";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemonById = async (id: string | number) => {
	const res = await axios.get(`${BASE_URL}/pokemon/${id}`);
	const parsed = PokemonSchema.safeParse(res.data);

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
	const res = await axios.get(`${BASE_URL}/pokemon`, {
		params: { limit, offset },
	});
	const parsed = PokemonListResponseSchema.safeParse(res.data);

	if (!parsed.success) {
		console.error(parsed.error.format());
		throw new Error("Invalid Pokémon list data");
	}

	return parsed.data;
};

export const getPokemonByName = async (name: string) => {
	const res = await axios.get(`${BASE_URL}/pokemon/${name}`);
	const parsed = PokemonSchema.safeParse(res.data);

	if (!parsed.success) {
		console.error(parsed.error.format());
		throw new Error("Invalid Pokémon data");
	}

	return parsed.data;
};

export const getTypeData = async (typeName: string) => {
	const res = await axios.get(`${BASE_URL}/type/${typeName}`);
	return res.data;
};

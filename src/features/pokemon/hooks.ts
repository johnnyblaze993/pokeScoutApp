import { useQuery } from "@tanstack/react-query";
import {
	getPokemonById,
	getAllPokemon,
	getPokemonByName,
	getTypeData,
} from "../../api/pokemonApi";
import { PokemonListResponse, TypeRelation, TypeRelationSchema } from "./types";

export const usePokemonById = (id: string | number) => {
	return useQuery({
		queryKey: ["pokemon", id],
		queryFn: () => getPokemonById(id),
		enabled: !!id, // only run if id exists
	});
};

export const usePokemonList = (limit = 20, offset = 0) => {
	return useQuery<PokemonListResponse>({
		queryKey: ["pokemonList", offset],
		queryFn: () => getAllPokemon(limit, offset),
		staleTime: 1000 * 60, // optional: keeps data fresh for 1 minute
	});
};

export const usePokemonByName = (name: string) => {
	return useQuery({
		queryKey: ["pokemon", name],
		queryFn: () => getPokemonByName(name),
		enabled: !!name, // only run if name exists
	});
};

export const useTypeData = (type: string) => {
	return useQuery<TypeRelation>({
		queryKey: ["type", type],
		queryFn: async () => {
			const res = await getTypeData(type);
			const parsed = TypeRelationSchema.safeParse(res);
			if (!parsed.success) throw new Error("Invalid type data");
			return parsed.data;
		},
		staleTime: 1000 * 60 * 10,
	});
};

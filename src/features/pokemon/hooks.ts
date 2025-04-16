import { useQuery } from "@tanstack/react-query";
import { getPokemonById, getAllPokemon } from "../../api/pokemonApi";
import { PokemonListResponse } from "./types";

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
    staleTime: 1000 * 60, // optional: keeps data fresh
  });
};

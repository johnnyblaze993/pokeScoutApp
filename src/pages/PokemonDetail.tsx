import { useParams } from "react-router-dom";
import { usePokemonById } from "../features/pokemon/hooks";
import BackButton from "../components/Buttons/BackButton";

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = usePokemonById(id || "");

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Something went wrong.</p>;

  return (
    <div>
      <BackButton />
      <h2>{data.name.toUpperCase()}</h2>
      <img src={data.sprites.front_default ?? ""} alt={data.name} />
      <p>Types: {data.types.map((t) => t.type.name).join(", ")}</p>
    </div>
  );
};

export default PokemonDetail;

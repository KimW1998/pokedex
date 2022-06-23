import { useParams } from "react-router-dom";

const PokemonDetailPage = () => {
  const routeParams = useParams();
  return <p>{routeParams.pokemon_name}</p>;
};

export default PokemonDetailPage;

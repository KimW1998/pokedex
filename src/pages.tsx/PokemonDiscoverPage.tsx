import { ApiPokemon } from "../components/load";
import { NavLink } from "react-router-dom";

type props = {
  pokemon: ApiPokemon;
};

const PokemonDiscoverPage = ({ pokemon }: props) => {
  return (
    <div>
      <div>{pokemon.name}</div>
      <NavLink to={`/details/${pokemon.name}`}>See more</NavLink>
    </div>
  );
};

export default PokemonDiscoverPage;

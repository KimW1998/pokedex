import { useState, useEffect } from "react";
import axios from "axios";
import PokemonDiscoverPage from "../pages.tsx/PokemonDiscoverPage";
import { useNavigate, useParams } from "react-router-dom";

export type ApiPokemon = {
  name: string;
  url: string;
};

const LoadPokemons = () => {
  const [pokemons, setPokemons] = useState<ApiPokemon[]>();
  const [filter, setFilter] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemons(
        response.data.results.map((apiPokemon: ApiPokemon) => {
          return {
            name: apiPokemon.name,
            url: apiPokemon.url,
          };
        })
      );
    };
    FetchData();
    if (params.filter) {
      setFilter(params.filter);
    } else {
      setFilter("");
    }
  }, []);

  const updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    navigate(`/discover/${e.target.value}`);
  };

  return (
    <div>
      <p>
        Search Pokemon:{" "}
        <input
          type="text"
          value={filter}
          placeholder="Name"
          onChange={updateFilter}
        />
      </p>
      <div>
        <p>Pokemons:</p>
        <div className="pokemon-discover-container ">
          {pokemons ? (
            pokemons
              .filter((pokemon) => pokemon.name.startsWith(filter))
              .map((pokemon, i) => {
                return <PokemonDiscoverPage key={i} pokemon={pokemon} />;
              })
          ) : (
            <p>Loading pokemons...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadPokemons;

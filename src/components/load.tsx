import { useState, useEffect } from "react";
import axios from "axios";
import PokemonDiscoverPage from "../pages.tsx/PokemonDiscoverPage";

export type ApiPokemon = {
  name: string;
};

const LoadPokemons = () => {
  const [pokemons, setPokemons] = useState<ApiPokemon[]>();

  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokemons(
        response.data.results.map((apiPokemon: ApiPokemon) => {
          return {
            name: apiPokemon.name,
          };
        })
      );
    };
    FetchData();
  }, []);

  return (
    <div>
      <p>Pokemons:</p>
      {pokemons ? (
        pokemons.map((pokemon) => {
          return <PokemonDiscoverPage pokemon={pokemon} />;
        })
      ) : (
        <p>Loading pokemons...</p>
      )}
    </div>
  );
};

export default LoadPokemons;

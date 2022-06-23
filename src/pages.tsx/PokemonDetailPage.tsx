import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

type pokemonSprites = {
  front_default: string;
};

type typePokemon = {
  name: string;
};

type PokemonTypes = {
  type: typePokemon;
};

type pokemonsDetailsProps = {
  name: string;
  weight: number;
  types: PokemonTypes[];
  sprites: pokemonSprites;
};

const PokemonDetailPage = () => {
  const routeParams = useParams();

  const [pokemonsDetails, setPokemonsDetails] =
    useState<pokemonsDetailsProps>();

  useEffect(() => {
    const FetchData = async () => {
      const responsesDetails = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${routeParams.pokemon_name}`
      );
      setPokemonsDetails(responsesDetails.data);
    };

    FetchData();
  }, []);

  return pokemonsDetails ? (
    <div>
      <h2>{pokemonsDetails.name}</h2>
      <img src={pokemonsDetails.sprites.front_default} alt="front pokemon" />
      <p>
        Types:{" "}
        {pokemonsDetails.types.map((typeObj) => (
          <span>{typeObj.type.name} </span>
        ))}
      </p>
      <p>Weight: {pokemonsDetails.weight} hectograms</p>
    </div>
  ) : (
    <p>Loading ...</p>
  );
};

export default PokemonDetailPage;

import { ApiPokemon } from "../components/load";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { pokemonsDetailsProps } from "./PokemonDetailPage";
import { useEffect, useState } from "react";
import axios from "axios";

type props = {
  pokemon: ApiPokemon;
};

const PokemonDiscoverPage = ({ pokemon }: props) => {
  const [pokemonsDetails, setPokemonsDetails] =
    useState<pokemonsDetailsProps>();

  useEffect(() => {
    const FetchData = async () => {
      const responsesDetails = await axios.get(pokemon.url);
      setPokemonsDetails(responsesDetails.data);
    };
    FetchData();
  }, []);

  console.log({ pokemonsDetails });

  return (
    <div className="pokemon-discover-container">
      <Card
        className="Pokemon-discover-card"
        border="dark"
        style={{ width: "18rem" }}
      >
        {pokemonsDetails ? (
          <Card.Img
            variant="top"
            src={pokemonsDetails.sprites.front_default}
            className="img-discover-card"
          />
        ) : (
          <p>....Loading</p>
        )}
        <Card.Body className="pokemon-body-card">
          <div className="pokemon-discover-name">{pokemon.name}</div>
          <NavLink to={`/details/${pokemon.name}`}>See more</NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokemonDiscoverPage;

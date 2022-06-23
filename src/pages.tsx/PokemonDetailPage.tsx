import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

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
    <div className="pokemon-detail-container ">
      <Card
        className="Pokemon-detail-card"
        border="dark"
        style={{ width: "18rem" }}
        bg="info"
      >
        <Card.Header className="pokemon-detail-name">
          {pokemonsDetails.name}
        </Card.Header>
        <div className="img-detail-container">
          <Card.Img
            variant="top"
            src={pokemonsDetails.sprites.front_default}
            alt="front pokemon"
            className="img-detail-card"
          />
        </div>
        <Card.Body className="card-detail-text">
          <p>
            Types:{" "}
            {pokemonsDetails.types.map((typeObj) => (
              <span>{typeObj.type.name} </span>
            ))}
          </p>
          <p>Weight: {pokemonsDetails.weight} hectograms</p>
        </Card.Body>
      </Card>
    </div>
  ) : (
    <p>Loading ...</p>
  );
};

export default PokemonDetailPage;

import { ApiPokemon } from "../components/load";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

type props = {
  pokemon: ApiPokemon;
};

const PokemonDiscoverPage = ({ pokemon }: props) => {
  return (
    <div className="pokemon-discover-container">
      <Card
        className="Pokemon-discover-card"
        border="dark"
        style={{ width: "18rem" }}
      >
        <Card.Img
          variant="top"
          src="faviconpoke.ico"
          className="img-discover-card"
        />
        <Card.Body className="pokemon-body-card">
          <div className="pokemon-discover-name">{pokemon.name}</div>
          <NavLink to={`/details/${pokemon.name}`}>See more</NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokemonDiscoverPage;

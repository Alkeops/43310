import { useEffect, useState } from "react";
import { FlexComponent, Title } from "../common";
import { Pokemon } from "./Pokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0";

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <FlexComponent gap="8px">
      <Title label="Pokemons" variant="subtitle" />
      <FlexComponent direction="row" wrap="wrap">
        {pokemons.map(({ id, name, sprites }) => (
          <Pokemon
            key={id}
            name={name}
            number={id}
            img={sprites.other["official-artwork"].front_default}
          />
        ))}
      </FlexComponent>
    </FlexComponent>
  );
};

import { useEffect, useState } from "react";
import { FlexComponent, Title } from "../common";
import { Pokemon } from "./Pokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0";

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const handlePokemon = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    const promises = data.results.map((pokemon) => {
      return fetch(pokemon.url).then((response) => response.json());
    });
    const _pokemons = await Promise.all(promises);
    setPokemons(_pokemons);
    /* let _pokemons = []
    for(const pokemon of data.results){
        const response = await fetch(pokemon.url);
        const data = await response.json();
        _pokemons = [..._pokemons, data]
    } */
  };

  useEffect(() => {
    /*  fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((response) => response.json())
            .then((_data) => setPokemons((prevState) => [...prevState, _data]));
        });
      }); */
    handlePokemon();
  }, []);

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

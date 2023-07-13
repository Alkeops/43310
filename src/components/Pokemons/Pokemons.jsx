import { useEffect, useState } from "react";
import { FlexComponent, Title } from "../common";
import { Pokemon } from "./Pokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0";

/*
UNA PETICION HTTP SE FORMA DE 
API_URL = https://pokeapi.co/api/v2
ENDPOINT = /pokemon
QUERY PARAMS (opcionales) = ?limit=200&offset=0   El primero con ? los subsecuentes con &

TAMBIEN PUEDE SER CON 
URL PARAM = /ditto
los url param son parametros dinamicos, y una practica comun para acceder a un elemento en especifico
Por ejemplo 
/products Traeria todos
/products/1 Traeria el que es id 1 
(Depende del backend la implementacion)
 */

export const Pokemons = () => {
  //TENEMOS UN ESTADO PARA GUARDAR EL RESULTADO DE UNA PETICION
  const [pokemons, setPokemons] = useState([]);


  const handlePokemon = async () => {
    //MISMO FORMATO COMUN 
    //Estado para almacenar
    //Response = await fetch(url);
    //data = await response.json();
    const response = await fetch(API_URL);
    const data = await response.json(); 
    //Manejando con las promesas (si es que son muchas peticiones)
    //Todas las promesas se almacenan en un array
    const promises = data.results.map((pokemon) => {
      return fetch(pokemon.url).then((res) => res.json()
    )}
    )
    //Y lo que 'esperas' es la resolucion de todas, entonces se hacen en paralelo
    const _pokemons = await Promise.all(promises)

    setPokemons(_pokemons);

   /*
   ESTE METODO FUNCIONA, PERO VA A ESPERAR A LA RESOLUCION DE CADA UNA DE LAS PROMESAS
   Es decir si promesa === 1s entonces tardaria 200s
   let _pokemons = [];
    for(const pokemon of data.results){
      const _response = await fetch(pokemon.url);
      const _data = await _response.json();
      _pokemons = [..._pokemons, _data];
    }
    setPokemons(_pokemons); */

  }

  useEffect(() => {
    handlePokemon();
    /*
      CASO ANTIGUO
      ANTES EXISTIA EL PROBLEMA POR LAS PROMESAS ANIDADAS    
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((pokemon) => { //forEach no es un metodo que funcione con promesas o asincronismo
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((_data) => setPokemons((prev) => [...prev, _data]));
        });
      }); */
  }, []);

  return (
    <FlexComponent gap="8px">
      <Title label="Pokemons" variant="subtitle" />
      <FlexComponent direction="row" wrap="wrap">
        {pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            number={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.other["official-artwork"].front_default}
          />
        ))}
      </FlexComponent>
    </FlexComponent>
  );
};

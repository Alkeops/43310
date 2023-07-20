import "./Pokemon.scss";
import { FlexComponent } from "../../common";
import { useRouteLoaderData } from "react-router-dom";

export const Pokemon = ({ img, name, number }) => {
  const pokemon = useRouteLoaderData("pokeId"); //Usa la data que viene de la respuesta de la peticion de la ruta
  return (
    <div className="pokemon">
      <FlexComponent>
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={`${name}`} />
        <span className="pokemon__name">{pokemon.name}</span>
        <div className="pokemon__wrapper">
        <span className="pokemon__number">{pokemon.id}</span></div>
      </FlexComponent>
    </div>
  );
};

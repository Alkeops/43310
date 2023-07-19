import { Axios } from "../../components/Axios";
import { Fetch } from "../../components/Fetch";
import { Ky } from "../../components/Ky";
import { Nasa } from "../../components/Nasa";
import { Pokemons } from "../../components/Pokemons";
import { FlexComponent, Title } from "../../components/common";

export const Clase07 = () => {
  return (
    <FlexComponent align="flex-start" fullWidth>
      <Title label="Clase07" />
      <Pokemons />
      <Nasa />
      <Fetch />
      <Axios />
      <Ky />
    </FlexComponent>
  );
};

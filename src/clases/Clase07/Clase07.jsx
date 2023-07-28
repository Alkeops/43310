import { useNavigate } from "react-router-dom";
import { Axios } from "../../components/Axios";
import { Fetch } from "../../components/Fetch";
import { Ky } from "../../components/Ky";
import { Nasa } from "../../components/Nasa";
import { Pokemons } from "../../components/Pokemons";
import { Button, FlexComponent, Title } from "../../components/common";

export const Clase07 = () => {
  const navigate = useNavigate();
  return (
    <FlexComponent align="flex-start" fullWidth>
      <Title label="Clase07" />
      <Button label="Clase 04" onClick={()=> navigate('/clase04')} />
      {/* <Pokemons /> */}
      <Nasa />
     {/*  <Fetch />
      <Axios />
      <Ky /> */}
    </FlexComponent>
  );
};

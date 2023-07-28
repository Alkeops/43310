import { useEffect, useState } from "react";
import { NasaCard } from "./NasaCard/NasaCard";
import { Button, FlexComponent, Title } from "../common";
import { useQuery } from "@tanstack/react-query";
import { useNasaData } from "../../lib/nasa.requests";

const API_KEY = "gkNJiVBizkgyhGzb9ujNoi5Bu8D9L2szj29qN1nO";
const API_URL = "https://api.nasa.gov";
//PETICION A LA API DE LA NASA
//Tiene una api_url que se envia como query param

const handleRequest = async () => {
  const response = await fetch(
    `${API_URL}/planetary/apod?api_key=${API_KEY}&count=5`
  ); //API_URL + ENDPOINT + QUERY PARAM
  return await response.json();
};

export const Nasa = () => {
  //Ejemplo mas simple
  const { data, isLoading, isError, isSuccess } = useNasaData();

  //Un estado para manejar la data de la respuesta (y mostrarla al usuario)
  //Un estado de loading
  /*   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); */

  /* useEffect(() => {
    handleRequest();
  }, []); */

  return (
    <FlexComponent align="flex-start">
      <FlexComponent direction={"row"} justify={"space-between"} fullWidth>
        <FlexComponent direction={"row"} gap="24px">
          <Title label="NASA" variant="subtitle" />
          <Title label={isLoading ? "Cargando..." : ""} variant="subtitle" />
        </FlexComponent>
        <Button label="Cargar más" onClick={() => handleRequest()} />
      </FlexComponent>
      <FlexComponent align="flex-start" gap="40px">
        {data?.map((capture, idx) => (
          <NasaCard
            key={idx}
            img={capture.url}
            title={capture.title}
            by={capture.copyright}
            explanation={capture.explanation}
          />
        ))}
      </FlexComponent>
    </FlexComponent>
  );
};

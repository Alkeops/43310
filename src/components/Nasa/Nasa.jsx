import { useEffect, useState } from "react";
import { NasaCard } from "./NasaCard/NasaCard";
import { Button, FlexComponent, Title } from "../common";

const API_KEY = "gkNJiVBizkgyhGzb9ujNoi5Bu8D9L2szj29qN1nO";
const API_URL = "https://api.nasa.gov";
//PETICION A LA API DE LA NASA
//Tiene una api_url que se envia como query param

export const Nasa = () => {
  //Un estado para manejar la data de la respuesta (y mostrarla al usuario)
  //Un estado de loading
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {
    //MISMO TEMPLATE
    //response = await fetch(url)
    //data = await response.json()
    setLoading(true); //Primero se pone el estado como que va a cargar

    const response = await fetch(
      `${API_URL}/planetary/apod?api_key=${API_KEY}&count=5`
    ); //API_URL + ENDPOINT + QUERY PARAM
    const json = await response.json();
    setData([...json, ...data]); //Se guardan en el estado todo lo que viene en la respuesta en el json, y al final todo lo que estaba en el estado
    setLoading(false); //Se cambia el loading a false, estamos seguros que paso porque primero espero a la respuesta (se puede mejorar con try{}catch(){})
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <FlexComponent align="flex-start">
      <FlexComponent direction={"row"} justify={"space-between"} fullWidth>
        <FlexComponent direction={"row"} gap="24px">
          <Title label="NASA" variant="subtitle" />
          <Title label={loading ? "Cargando..." : ""} variant="subtitle" />
        </FlexComponent>
        <Button label="Cargar más" onClick={() => handleRequest()} />
      </FlexComponent>
      <FlexComponent align="flex-start" gap="40px">
        {data.map((capture, idx) => (
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

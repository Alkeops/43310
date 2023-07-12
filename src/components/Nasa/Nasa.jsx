import { useEffect, useState } from "react";
import { NasaCard } from "./NasaCard/NasaCard";
import { Button, FlexComponent, Title } from "../common";

const API_KEY = "gkNJiVBizkgyhGzb9ujNoi5Bu8D9L2szj29qN1nO";
const API_URL = "https://api.nasa.gov/";

export const Nasa = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async () => {
    setLoading(true);
    const response = await fetch(
      `${API_URL}planetary/apod?api_key=${API_KEY}&count=5`
    );
    const json = await response.json();
    setLoading(false);
    setData([...json, ...data]);
  };

  return (
    <FlexComponent align="flex-start">
      <FlexComponent direction={"row"} justify={"space-between"} fullWidth>
        <FlexComponent direction={"row"} gap="24px">
          <Title label="NASA" variant="subtitle" />
          <Title label={loading ? "Cargando..." : ""} variant="subtitle" />
        </FlexComponent>
        <Button label="Cargar más" onClick={handleRequest} />
      </FlexComponent>
      <FlexComponent align="flex-start" gap="40px">
        {data.map(({ url, title, explanation, copyright }, idx) => (
          <NasaCard
            key={idx}
            img={url}
            explanation={explanation}
            by={copyright}
            title={title}
          />
        ))}
      </FlexComponent>
    </FlexComponent>
  );
};

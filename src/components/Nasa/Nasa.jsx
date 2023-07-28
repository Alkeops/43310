import { useEffect, useState } from "react";
import { NasaCard } from "./NasaCard/NasaCard";
import { Button, FlexComponent, Title } from "../common";
import { useQuery } from "@tanstack/react-query";
import { useNasaData } from "../../lib/nasa.requests";


export const Nasa = () => {
  const { data, isLoading, isError, isSuccess } = useNasaData();

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

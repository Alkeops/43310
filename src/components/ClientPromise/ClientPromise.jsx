import { useEffect, useState } from "react";
import { FlexComponent, Title } from "../common";

const prometoQueVoy = () =>
  new Promise((res, rej) => {

    const siva = Math.random() <= 0.5;

    setTimeout(() => {

      if(siva) res("Vino")
      rej("Desocupo las mesas");

    }, 3500);
  });


export const ClientPromise = () => {
  const [isLoading, setIsLoading] = useState(false); //Un estado para cargando
  const [hasError, setHasError] = useState(null); //Un estado para error
  const [llega, setLlega] = useState(null); //Un estado para el 'resultado'

  useEffect(()=>{
    //Al comienzo (cuando se monta) se incializa el isLoading en true
    setIsLoading(true);
    prometoQueVoy()
      .then(res => { setLlega(res)} ) //Si se cumple
      .catch(error => setHasError(error)) //Si falla
      .finally(() => setIsLoading(false)) //De cualquiera de las dos maneras
      
  },[])

  return (
    <FlexComponent align={"flex-start"} gap="40px">
      <Title label="Prometo ir" variant="subtitle" />

      <FlexComponent direction={"row"} gap="24px">
        <Title label={isLoading ? "Cargando.." :  "Cargo "} />
        <Title label={hasError ? hasError : "Sin error"} />
        {/* ¿Vendra? */}
        <Title label={llega} variant="subtitle" />
      </FlexComponent>
    </FlexComponent>
  );
};

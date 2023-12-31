import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Counter } from "../../components/Counter";
import { Form } from "../../components/Form";
import { ToggleTheme } from "../../components/ToggleTheme";
import { Button, Title, FlexComponent, Input } from "../../components/common";
import { useEffect, useState } from "react";
import { useNasaData } from "../../lib/nasa.requests";
/* 
Componentes de presentacion, solo estan para mostrar informacion, altamente ligados con los estilos.

FlexComponente recibe children y lo procede a acomodar en un layout flex
Title recibe simplemente un label
Button puede recibir variante primary o secondary

ctrl + p y nombre para abrir el archivo directamente
*/
export const Clase04 = () => {
  const [value, setValue] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const {data} = useNasaData();
  useEffect(()=>{
    console.log(data)
  },[data])


  return (
    <FlexComponent gap="40px" align="flex-start">
      <Button label="Clase 07" onClick={()=> navigate('/clase07')} />
      <Title label="Clase04" />
      <Title label="Componentes de presentacion" variant="subtitle" />
      {/* Componentes de presentacion */}
      <FlexComponent direction="row" gap="24px">
        <Title label="Title simple" variant="subtitle" />
        <Button label="Boton sin variant" />
        <Button label="Boton secondary" variant="secondary" />
        <Input
          placeholder="Un input simple"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
      </FlexComponent>
      <Title label="Componentes con estado" variant="subtitle" />
      {/* Componentes con estado */}
      <FlexComponent gap="24px">
        <Counter stock={10} onAdd={(qty) => console.log(`van ${qty}`)} />
        <Card price={200} title="Un producto" img="" />
        <ToggleTheme />
        <Form />
      </FlexComponent>
    </FlexComponent>
  );
};

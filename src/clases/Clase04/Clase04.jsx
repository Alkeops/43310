import { Counter } from "../../components/Counter";
import { Button, Title, FlexComponent, Input } from "../../components/common";
import {useState} from "react";
/* 
Componentes de presentacion, solo estan para mostrar informacion, altamente ligados con los estilos.

FlexComponente recibe children y lo procede a acomodar en un layout flex
Title recibe simplemente un label
Button puede recibir variante primary o secondary

ctrl + p y nombre para abrir el archivo directamente
*/
export const Clase04 = () => {
  const [value, setValue] = useState("");
  return (
    <FlexComponent gap="40px" align="flex-start">
      <Title label="Clase04" />
      <Title label="Componentes de presentacion" variant="subtitle" />
      {/* Componentes de presentacion */}
      <FlexComponent direction="row" gap="24px">
        <Title label="Title simple" variant="subtitle" />
        <Button label="Boton sin variant" />
        <Button label="Boton secondary" variant="secondary" />
        <Input placeholder="Un input simple" value={value} onChange={({target}) => setValue(target.value)} />
      </FlexComponent>
      <Title label="Componentes con estado" variant="subtitle" />
      {/* Componentes con estado */}
      <FlexComponent direction="row" gap="24px">
        <Counter stock={10} onAdd={(qty)=>console.log(`van ${qty}`)} />
      </FlexComponent>
    </FlexComponent>
  );
};

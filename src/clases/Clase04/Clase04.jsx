import { Button, Title, FlexComponent } from "../../components/common";
/* 
Componentes de presentacion, solo estan para mostrar informacion, altamente ligados con los estilos.

FlexComponente recibe children y lo procede a acomodar en un layout flex
Title recibe simplemente un label
Button puede recibir variante primary o secondary

ctrl + p y nombre para abrir el archivo directamente
*/

export const Clase04 = () => {
  return (
    <FlexComponent gap="40px" align="flex-start">
      <Title label="Clase04" />
      <Title label="Componentes de presentacion" variant="subtitle" />
      {/* Componentes de presentacion */}
      <FlexComponent direction="row" gap="24px">
        <Title label="Title simple" variant="subtitle" />
        <Button label="Boton sin variant" />
        <Button label="Boton secondary" variant="secondary" />
      </FlexComponent>
    </FlexComponent>
  );
};

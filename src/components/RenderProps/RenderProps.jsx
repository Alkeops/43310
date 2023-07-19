import { useEffect, useState } from "react";
import { FlexComponent, Title } from "../common";



export const RenderProps = ({customNumber}) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const random = Math.floor(Math.random() * 1000) + 1;
      setState(random);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FlexComponent direction={"row"} gap="40px">
      <Title label="Render Props" />
      {/* Se recibe por porps un componente o elemento de React. 
        Lo importante es que a esa funcion se le envia el state (en este caso)
        para que en su elemento padre pueda sufrir modificaciones.
        Se usa mucho con cosas de interfaz para modificar los componentes sin
        entrar en la logica que maneja el mismo componente en si
      */}
      {customNumber?.(state) ||  <Title label={state} />}
     
    </FlexComponent>
  );
};

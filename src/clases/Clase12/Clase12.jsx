import { memo, useState } from "react";
import { Button, FlexComponent, Title } from "../../components/common";


const ComponentWithoutMemo = ({ name }) => {
  console.log("Renderizando ComponentWithoutMemo");
  return <div>Total: {name}</div>;
};

//Memo se usa para memorizar un componente, evita multiples renderizados
//Pero es mas util en grandes listas de contenido sin paginar
//Como con scroll infinitos, en pequeñas listas la diferencia
//de rendimiento es minima
const ComponentWithMemo = memo(({ name }) => {
  console.log("Renderizando ComponentWithMemo");
  return <div>Total: {name}</div>;
});


export const Clase12 = () => {
  const data = new Array(500).fill({ name: "Juan" });
  const [state, setState] = useState(0);
  return (
    <FlexComponent align="flex-start" fullWidth>
      <Title label="Clase12" />
      <FlexComponent>
        <Button onClick={() => setState(state + 1)} label="Contar" />{" "}
        <span>{state}</span>
      </FlexComponent>
      {data.map((_data, idx) => (
        <ComponentWithMemo name={_data.name} key={idx}/>
      ))}
      {/*  <ComponentWithMemo data={data} /> */}
    </FlexComponent>
  );
};

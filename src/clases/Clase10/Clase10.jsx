import { useState } from "react";
import { FlexComponent, Title } from "../../components/common";

const elements = ["A", "B", "C", "D", "E", "F"];

export const Clase10 = () => {
  const [state, setState] = useState(elements);
  //Empieza a arrastrar un elemento y se usa setData de dataTransfer
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };
  //Para que deje dropear elementos
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  //Cuando se suelta (este seria el componente que recibe)
  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData("text"); //Se busca el texto del dataTransfer
    if (index === +draggedIndex) return; //Si es el mismo elemento el que se arrastra
    //que el que recibe no hace nada

    //Se actualiza el array eliminando el item arrastrado
    const updateArray = state.filter((_, idx) => idx !== +draggedIndex);
    //Y se pone en la nueva posicion
    updateArray.splice(index, 0, state[+draggedIndex]);

    console.log({
      eliminado: state.filter((_, idx) => idx !== +draggedIndex),
      actualizado: updateArray,
    });
    setState(updateArray);
    /*  console.log(e); */
  };
  const handleClick = () => {
    console.log("click");
  };

  return (
    <FlexComponent align="flex-start" fullWidth>
      <Title label="Clase10" />
      <FlexComponent gap="24px" direction="row">
        {state.map((element, index) => (
          <div
            draggable
            onClick={handleClick}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            key={element}
            style={{
              background: "#ee8dec",
              color: "#121212",
              padding: 16,
              height: 150,
              width: 150,
              display: "grid",
              placeItems: "center",
            }}
          >
            <span style={{ fontSize: 20, fontWeight: "bolder" }}>
              {element}
            </span>
          </div>
        ))}
      </FlexComponent>
    </FlexComponent>
  );
};

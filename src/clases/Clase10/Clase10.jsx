import { useState } from "react";
import { FlexComponent, Title } from "../../components/common";

export const Clase10 = () => {
  const elements = ["A", "B", "C", "D", "E", "F"];
  const [state, setState] = useState(elements);
  const handleDragStart = (event, index) => {
    // Este evento se activa cuando comienza el arrastre de un elemento
    event.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (event) => {
    // Este evento es necesario para permitir el soltar el elemento
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    // Este evento se activa cuando se suelta el elemento arrastrado
    const draggedIndex = +event.dataTransfer.getData("text");
    if (draggedIndex === index) return;

    const updatedElements = state.filter((_, idx) => idx !== draggedIndex);
    updatedElements.splice(index, 0, state[draggedIndex]);
    setState(updatedElements);
  };

  return (
    <FlexComponent align="flex-start" fullWidth>
      <Title label="Clase10" />
      <FlexComponent gap="24px" direction="row">
        {state.map((element, index) => (
          <div
            key={element}
            draggable // Hace que el elemento sea "arrastrable"
            onDragStart={ e => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
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

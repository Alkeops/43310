import { useState } from "react";
import { FlexComponent, Title } from "../../components/common";

const elements = ["A", "B", "C", "D", "E", "F"];
//TODO
export const Clase10 = () => {
  const [state, setState] = useState(elements);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData("text");
    if (index === +draggedIndex) return;

    const updateArray = state.filter((_, idx) => idx !== +draggedIndex);
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

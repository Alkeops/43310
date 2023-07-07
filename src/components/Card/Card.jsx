import { useState } from "react";

//Importamos sus estilos especificos
import "./Card.css";

export const Card = () => {
  //Tenemos un estado hovered , este nos va a servir para hacer "zoom" a la foto al pasar el mouse
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)} //Cuando el mouse se posiciona por encima del elemento cambia el estado a true
      onMouseLeave={() => setHovered(false)} //Cuando sale del elemento cambia el estado a false
    >
      <img
        className="card__img"
        src={"https://www.pngall.com/wp-content/uploads/5/Purse-PNG-File.png"} //Imagen prestada de internet
        style={{
          height: hovered ? "120%" : "100%", //Si el estado es true mostrara la imagen algo más grande, si no solo al 100% del alto
        }}
      />
    </div>
  );
};

import { useState } from "react";

//Importamos sus estilos especificos
import "./Card.scss";

export const Card = ({ img, title, price }) => {
  //Tenemos un estado hovered , este nos va a servir para hacer "zoom" a la foto al pasar el mouse
  const [hovered, setHovered] = useState(false);
  return (
    <div className="card">
      <div
        className="card__img"
        onMouseEnter={() => setHovered(true)} //Cuando el mouse se posiciona por encima del elemento cambia el estado a true
        onMouseLeave={() => setHovered(false)} //Cuando sale del elemento cambia el estado a false
      >
        <img
          src={img} //Imagen prestada de internet
          style={{
            transform: `scale(${hovered ? "1.2" : "1"})`, //Si el estado es true mostrara la imagen algo más grande, si no solo al 100% del alto
          }}
        />
      </div>
      <div className="card__info">
        <span className="card__info-price">${(price).toFixed(2)}</span>
        <span className="card__info-price">${(price).toLocaleString('es-Mx',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
        <span className="card__info-title">{title}</span>
      </div>
    </div>
  );
};

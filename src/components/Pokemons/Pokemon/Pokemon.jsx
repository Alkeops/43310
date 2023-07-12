import "./Pokemon.scss";
import { FlexComponent } from "../../common";

export const Pokemon = ({ img, name, number }) => {
  return (
    <div className="pokemon">
      <FlexComponent>
        <img src={img} alt={`${name}`} />
        <span className="pokemon__name">{name}</span>
        <div className="pokemon__wrapper">
        <span className="pokemon__number">{number}</span></div>
      </FlexComponent>
    </div>
  );
};

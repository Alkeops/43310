import { FlexComponent } from "../../common";
import "./NasaCard.scss";

export const NasaCard = ({ img, title, by = "Jhon Doe", explanation }) => {
  return (
    <div className="nasa-card">
      <FlexComponent direction={"row"} align={'flex-start'} gap={"24px"}>
        <div className="nasa-card__img">
          {" "}
          <img src={img} alt="nasa" />
        </div>
        <div className="nasa-card__content"> 
        <FlexComponent align="flex-start">
          <span className="nasa-card__title">{title}</span>
          <p className="nasa-card__exp">{explanation}</p>
          <span className="nasa-card__by">By {by}</span>
        </FlexComponent></div>
      </FlexComponent>
    </div>
  );
};

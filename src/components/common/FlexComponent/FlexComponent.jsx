import "./FlexComponent.css";
/* 
    Componente basico con children,
    es un div que puede recibir

    align === alignItems de css
    justify === justifyContent de css 
    gap === gap
    direction === flexDirection
    Nombres que elegi para tener algo de sentido y seteo ese css en linea, si no se manda alguna de esas props toma por defecto los estilos de FlexComponent.css
    -- Investigar css modules -- 

    Además recibe children, que serian los elementos que se estarian acomodando de manera adecuada
*/

export const FlexComponent = ({
  align,
  children,
  direction,
  gap,
  justify,
  wrap,
  fullWidth
}) => (
  <div
    className="flex-component"
    style={{
      gap,
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      width: fullWidth ? "100%" : "auto"
    }}
  >
    {children}
  </div>
);

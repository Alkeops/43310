import "./Button.css";
/*
  Componente de presentacion que renderiza un boton
  este recibe como props (establecidos pro mi)
  label - el texto que se vera en el boton
  onClick - la accion a ejecutar
  variant - el estilo de boton, para eso utilizo la metodologia BEM https://getbem.com/ 
  y template string para la clase, (ver css). De momento se inicializa con un valor vacio, si no mandan variant siempre sera igual a ""
  por ahora solo existe primary y secondary [Esto se puede perfeccionar mas adelante]
  icon === un icono de su libreria de iconos preferida o un componente de react
  className = por si es necesaria una clase externa 
*/

export const Button = ({
  label,
  onClick,
  variant = "",
  icon,
  className = "",
}) => (
  <button
    className={`button button--${variant} ${className}`}
    onClick={onClick}
  >
    {icon}
    {label}
  </button>
);

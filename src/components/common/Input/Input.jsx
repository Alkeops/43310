import "./Input.css";
/*
  Componente Input que renderiza un input, recibe
   value === valor actual del input
   onChange === funcion que se ejecuta cuando cambia el valor del input
  className === clase extra para el input si es necesaria, inicializada en ""
  ...props === el resto de props que se le manden, tal cual se pasa directo desde que se reciben hasta el elemento, por ejemplo placeholder. 
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  Rest al definir props
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  Spread al pasar props
*/
export const Input = ({ value, onChange, className = "", ...props }) => (
  <input
    className={`input ${className}`}
    value={value}
    onChange={onChange}
    {...props}
  />
);

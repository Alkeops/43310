const props = {
  typography: {
    xl: "24px",
  },
  colors: {
    blue: "#00ffff",
    red: "red",
  },
};
/* Styled es una funcion que recibe un componente y retorna
una funcion que recibe estilos que retorna una funcion
que recibe props y retorna el componente con esos props
*/ 
export const styled =
  (Component) =>
  (styles, ...args) => {
    const result = styles.reduce((acc, string, i) => {
      const arg = args[i];
      return (
        acc +
        string +
        (arg ? (typeof arg === "function" ? arg(props) : arg) : "")
      );
    }, ""); //Para manejar los tag functions y que se cree una unica string con los argumentos

    

    const styleObject = {};
   //Se separa por punto y coma las sentencias
    result.split(";").forEach((declaration) => {
      //se separa por ":" siendo el indice 0 property y el 1 value
      //por ejemplo background: red seria property = background , value = red
      const [property, value] = declaration.split(":");
      //Se quitan los espacios en blanco para el nombre y el valor
      if (property.trim() && value.trim()) {
        styleObject[property.trim()] = value.trim();
      }
    }); //Crea el objeto final de estilos

    return (props) => {
      return <Component {...props} style={styleObject} />; //Se le agrega el prop style con el objeto de estilos
    };
  };

// var = styled(Button)

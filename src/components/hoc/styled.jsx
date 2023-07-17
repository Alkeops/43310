//Crear funcion que reciba un compopnete y le aplique estilos con tagged functions
const props = {
    typography: {
      xl: "24px",
    },
    colors: {
      blue: "#00ffff",
      red: "red",
    },
};

//Styled recibe Button
//La segunda funcion `` recibe tagged string
//Finalmente el componente recibe props HOC y render props
export const styled = (Component) => {
  return (strings, ...args) => {
    const result = strings.reduce((acc, string, i) => {
      const arg = args[i];
      return (
        acc +
        string +
        (arg ? (typeof arg === "function" ? arg(props) : arg) : "")
      );
    }, "");

    const styleObject = {};

    result.split(";").forEach((declaration) => {
      const [property, value] = declaration.split(":");
      if (property.trim() && value.trim()) {
        styleObject[property.trim()] = value.trim();
      }
    });
    return (props) => {
      return <Component {...props} style={{ ...styleObject }} />;
    };
  };
};

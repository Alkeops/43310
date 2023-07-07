import { useEffect, useState } from "react";
import { Button, FlexComponent, Input } from "../common";

export const Form = () => {
  /* 

    Tenemos 3 estados, 
    uno para manejar el input de usuario
    uno para manejar el input de password
    uno para controlar el boton este habilitado o no

  */

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  /* 
    Tiene como dependencia [password], quiere decir que se ejecutara la funcion interna
    1) Cuando el componente es montado (Esta fisicamente en el dom)
    2) Cuando el estado de password cambie
  */
  useEffect(() => {
    if (password.length > 8) return setValid(true); //Si cumple la validacion de mas de 8 digitos cambia el estado a true.
    //Como es un retorno temprano no hace falta poner else, ya que solo llega a esta posicion si la condicion password.length > 8 fuera false
    setValid(false);
  }, [password]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FlexComponent gap={8}>
        <Input
          placeholder="Usuario"
          value={user} //Se les asigna de valor el estado correspondiente
          onChange={(e) => setUser(e.target.value)} //Se setea el estado segun cambie el input
        />
        <Input
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          label="Iniciar sesion"
          disabled={!valid} //Espera a saber si es valido la password (si password es > 8)
          onClick={() => console.log("Iniciando sesion")}
        />
      </FlexComponent>
    </form>
  );
};

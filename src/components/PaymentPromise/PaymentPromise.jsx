import { useEffect, useState } from "react";
import { Button, FlexComponent, Title } from "../common";


//Funcion que retorna una promesa dependiendo de un valor aleatorio (true o false)
const tePrometoQueTePago = () =>
  new Promise((res, rej) => {
    const paga = Math.random() <= 0.5;

    setTimeout(() => {
      if (paga) res("Ten tu dinero"); //Si es true lo resuelve

      rej("No, Tu tienes mucho"); //Si no lo cancela
    }, 1500);
  });

export const PaymentPromise = () => {
  const [pagara, setPagara] = useState(null); //El estado inicializa en null

  useEffect(() => {
    /* ASYNC Y await */
    //Se necesita crear una funcion asincrona dentro de el useEffect
    const handleRequest = async () => {
      try {
        const data = await tePrometoQueTePago();
        setPagara(data);
      } catch (e) {
        console.log(e);
      }
    };

    if (!pagara) {
      //Como queremos evitar bucles infinitos de lectura-seteo, tenemos una condicional solo sí es un valor falsy hace la "peticion"
      handleRequest(); //Se llama a la funcion asincrona
      /*
      Manejar promesa 

    tePrometoQueTePago()
    .then((res) => {
      setPagara(res);
    })
    .catch((err) => setPagara(err)); 
    */
    }
  }, [pagara]); //Tiene como dependencia pagara

  return (
    <FlexComponent align={"flex-start"} gap="40px">
      <Title label="Prometo pagar" variant="subtitle" />

      <FlexComponent direction={"row"} gap="24px">
        {/* ¿Pagara? */}
        <Button
          label="¿Me vas a pagar?"
          onClick={() => setPagara(null)} 
          //El boton pasa el estado a null lo que detona otra vez la peticion 
          //(Esto podria estar en una funcion aparte y no depender del useEffect)
        />
        <Title label={pagara} variant="subtitle" />
      </FlexComponent>
    </FlexComponent>
  );
};

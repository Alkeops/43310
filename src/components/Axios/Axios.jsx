import { useEffect, useState } from "react";
import { Button, FlexComponent, Title } from "../common";
import axios from "axios";
import { Card } from "../Card/Card";

const API_URL = "https://api.escuelajs.co/api/v1";
//Axios es mas robusto y por lo tanto mas pesado
//https://www.npmjs.com/package/axios depende de si usaran todas sus bondades
export const Axios = () => {
  //useAlgo 
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //PRUEBEN A VOLVERLO UNA FUNCION ASYNC
    //axios(url) hace una peticion get, el segundo parametro es un objeto de configuracion ,
    //en este caso params : {...} serian los query params que en fetch tenemos que poner manual
    axios(`${API_URL}/products`, {
      params: {
        offset: 0,
        limit: 15,
      },
    }).then((response) => {
      setProducts(response.data); //Axios retorna directamente el dato combertido a json, con la unica particularidad que viene en un objeto en su llave data (da otra info el objeto response)
    });
  }, []);

  const handlePost = () => {
    //Post axios.post(url, body)
    // el segundo aprametro es el body y hace la conversion directa
    // automaticamente añade el header    "Content-Type": "application/json",

    axios
      .post(`${API_URL}/products`, {
        title: "Producto de prueba 44",
        price: 100,
        description: "Descipcion de prueba",
        categoryId: 1,
        images: [
          "https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg",
        ],
      })
      .then((response) => {
        console.log(response.data); //la respuesta siempre sera un objeto con una llave data (donde esta lo que devolvio el servidor)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FlexComponent fullWidth>
      <FlexComponent fullWidth justify={"space-between"} direction={"row"}>
        <Title label="Axios" variant="subtitle" />
        <Button label="POST" onClick={handlePost} />
      </FlexComponent>
      <div className="container">
        <FlexComponent
          direction={"row"}
          justify={"flex-start"}
          align={"flex-start"}
          gap="16px"
          wrap="wrap"
        >
          {products.map((product) => (
            <Card
              key={product.id}
              img={product.images[0]}
              title={product.title}
              price={product.price}
            />
          ))}
        </FlexComponent>
      </div>
    </FlexComponent>
  );
};

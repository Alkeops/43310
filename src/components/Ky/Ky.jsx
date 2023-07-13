import { useEffect, useState } from "react";
import { Button, FlexComponent, Title } from "../common";
import ky from "ky";
import { Card } from "../Card/Card";

const API_URL = "https://api.escuelajs.co/api/v1";
//Ky esta basado en fetch https://www.npmjs.com/package/ky
//Y es mas ligero
export const Ky = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //ky(url) haria una peticion get
    //como segundo parametro puede recibir {searchParms} (que seria los query params), esto permite manejarlos mas facilmente
    //PRUEBEN A HACERLO CON UNA FUNCION ASYNC
    ky(`${API_URL}/products`, {
      searchParams: {
        limit: 10,
        offset: 10,
      },
    })
      .json() //Al estar basado en fetch es necesario el .json() [solo que se evita el .then + (res)=>{res.json()}]
      .then((response) => {
        setProducts(response); //Al final guardamos los productos
      });
  }, []);

  const handlePost = () => {
    //EL post usa ky + metodo post(url, parametros) en este caso si la llave es {json: {...}} lo que este en json === body de fetch, solo que este ya lo convierte a json directamente
    //automaticamente añade el header  "Content-Type": "application/json",
    ky.post(`${API_URL}/products`, {
      json: {
        title: "Producto de prueba",
        price: 100,
        description: "Descipcion de prueba",
        categoryId: 1,
        images: [
          "https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg",
        ],
      },
    })
      .json()
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <FlexComponent fullWidth>
      <FlexComponent fullWidth justify={"space-between"} direction={"row"}>
        <Title label="Ky" variant="subtitle" />
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

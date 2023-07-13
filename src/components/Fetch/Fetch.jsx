import { useEffect, useState } from "react";
import { Button, FlexComponent, Title } from "../common";
import { Card } from "../Card/Card";

const API_URL = "https://api.escuelajs.co/api/v1";

export const Fetch = () => {
  //Un estado para manejar los productos
  const [products, setProducts] = useState([]);
  //Funcion async para la peticion
  const handleRequest = async () => {
    //Mismo formato de siempre
    //response = await fetch(url)
    //data = await response.json()
    const response = await fetch(`${API_URL}/products?limit=10&offset=0`);
    const data = await response.json();
    setProducts(data); //Se que es un array de productos, asi que lo guardo en el estado
  };

  const handlePost = async () => {
    //Con fetch, el metodo POST se especifica como segundo parametro
    //Especificas el metodo, los headers, y el body que tiene que ser convertido a JSON para poder ser aceptado por el servidor
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Nuevo producto",
        price: 123123,
        description: "Un producto genial",
        categoryId: 1,
        images: [
          "https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg",
        ],
      }),
    });
    const data = await response.json();

    console.log({ data }); //No estamos haciendo nada particular con este producto, podria ser algo como
    //setProducts([data, ...products]) porque se que la respuesta es un objeto igual
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <FlexComponent fullWidth>
      <FlexComponent fullWidth justify={"space-between"} direction={"row"}>
        <Title label="Fetch" variant="subtitle" />
        <Button label="POST" onClick={() => handlePost()} />
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

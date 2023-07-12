import { useEffect, useState } from "react";
import { Button, FlexComponent, Title } from "../common";
import ky from "ky";
import { Card } from "../Card/Card";

const API_URL = "https://api.escuelajs.co/api/v1";

export const Ky = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ky(`${API_URL}/products`, {
      searchParams: {
        limit: 10,
        offset: 10,
      },
    })
      .json()
      .then((response) => {
        setProducts(response);
      });
  }, []);

  const handlePost = () => {
    ky.post(`${API_URL}/products`, {
      json: {
        title: "Producto de prueba",
        price: 100,
        description: "Descipcion de prueba",
        categoryId: 1,
        images: ["https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg"],
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

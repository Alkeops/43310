import { useEffect, useState } from "react";
import { Button, FlexComponent, Title } from "../common";
import axios from "axios";
import { Card } from "../Card/Card";

const API_URL = "https://api.escuelajs.co/api/v1";

export const Axios = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios(`${API_URL}/products`, {
      params: {
        offset: 0,
        limit: 15,
      },
    }).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handlePost = () => {
    axios
      .post(`${API_URL}/products`, {
        title: "Producto de prueba 44",
        price: 100,
        description: "Descipcion de prueba",
        categoryId: 1,
        images: ["https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg"],
      })
      .then((response) => {
        console.log(response.data);
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

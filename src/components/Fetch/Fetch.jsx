import { useEffect, useState } from "react";
import { Button, FlexComponent, Title } from "../common";
import ky from "ky";
import { Card } from "../Card/Card";

const API_URL = "https://api.escuelajs.co/api/v1";

export const Fetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/products?limit=15&offset=0`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handlePost = () => {
    fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title: "Ferch",
        price: 100,
        description: "Descipcion de prueba",
        categoryId: 1,
        images: ["https://m.media-amazon.com/images/I/71yaw5OF7fL._AC_UF1000,1000_QL80_.jpg"],
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <FlexComponent fullWidth>
      <FlexComponent fullWidth justify={"space-between"} direction={"row"}>
        <Title label="Fetch" variant="subtitle" />
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

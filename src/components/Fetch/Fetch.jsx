import { useEffect, useState } from "react";
import { Button, FlexComponent, Title } from "../common";
import ky from "ky";
import { Card } from "../Card/Card";

const API_URL = "https://api.escuelajs.co/api/v1";

export const Fetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
  }, []);

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
            />
          ))}
        </FlexComponent>
      </div>
    </FlexComponent>
  );
};

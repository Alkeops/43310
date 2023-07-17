import { useEffect } from "react";
import { RenderProps } from "../../components/RenderProps";
import { Button, FlexComponent, Title } from "../../components/common";
import { styled } from "../../components/hoc/styled";
import { useQuery, useProducts, useMutateProduct } from "../../hooks/useDataFetch";

export const Clase08 = () => {  
  const {data, isLoading, error} = useProducts({enabled: false});
  const {mutate} = useMutateProduct();

  useEffect(()=>{
    mutate({
      title: "Producto 1",
      price: 1000,
      description: "Lorem, ipsum.",
      categoryId: 1,
      images: ["https://picsum.photos/200/300"]
    })
  },[])

  useEffect(()=>{
    console.log({data, isLoading, error})
  },[data, isLoading, error])

  const tamaño = "40px";

  const StyledButton = styled(Button)`
    background: ${(theme) => theme.colors.blue};
    border: ${(theme) => `10px solid ${theme.colors.red}`};
    fontsize: ${tamaño};
  `;

  return (
    <FlexComponent align="flex-start" fullWidth>
      <Title label="Clase08" />
      <StyledButton label="hola" />
      <RenderProps />
      <RenderProps
        customNumber={(number) => (
          <h1 style={{ fontSize: 250, color: "red" }}>{number}</h1>
        )}
      />
      <RenderProps
        customNumber={(number) => (
          <h1 style={{ fontSize: 25, color: "blue" }}>{number}</h1>
        )}
      />
    </FlexComponent>
  );
};

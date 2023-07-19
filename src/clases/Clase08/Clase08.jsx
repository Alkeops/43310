import { useEffect, useState } from "react";
import { RenderProps } from "../../components/RenderProps";
import { Button, FlexComponent, Title } from "../../components/common";
import { styled } from "../../hoc/styled";
import { useQuery } from "../../hooks/useQuery";
import { useMountedEffect } from "../../hooks/useMountedEffect";


export const Clase08 = () => {
  const tamaño = "40px";
  const [estado, setStado] = useState(false);
  /* 
 Tag functions - https://codeburst.io/javascript-what-are-tag-functions-97682f29521b
  styled es un hoc, recibe un componente [Button] y retorna un nuevo componente vitaminado
 */
  const StyledButton = styled(Button)`
    background: ${(theme) => theme.colors.blue};
    border: ${(theme) => `10px solid ${theme.colors.red}`};
    fontsize: ${tamaño};
  `;

  useMountedEffect(() => {
    console.log("Montado");
  }, [estado]);

  return (
    <FlexComponent align="flex-start" fullWidth>
      <Title label="Clase08" />
      <StyledButton label="Styled Button" />
    </FlexComponent>
  );
};

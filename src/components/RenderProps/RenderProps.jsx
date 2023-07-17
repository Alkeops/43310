import { useEffect, useState } from "react";
import { FlexComponent, Title } from "../common";

export const RenderProps = ({ customNumber }) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const random = Math.floor(Math.random() * 1000) + 1;
      setState(random);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FlexComponent direction={"row"} gap="40px">
      <Title label="Render Props" />
      {customNumber?.(state) || <Title label={state} />}
    </FlexComponent>
  );
};

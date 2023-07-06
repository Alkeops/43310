import { useState } from "react";
import { Button, FlexComponent } from "../common";

export const Counter = ({ stock = 0, onAdd }) => {
  const [count, setCount] = useState(1);

  return (
    <FlexComponent gap="16px">
      <FlexComponent direction="row" gap="16px">
        <Button label="-" onClick={() => setCount(Math.max(1, count - 1))} />
        <span>{count}</span>
        <Button
          label="+"
          onClick={() => setCount(Math.min(stock, count + 1))}
        />
      </FlexComponent>
      <Button
        label="Agregar al carrito"
        variant="secondary"
        onClick={() => onAdd(count)}
        disabled={!stock}
      />
    </FlexComponent>
  );
};

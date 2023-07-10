import { useEffect, useState } from "react";
import { Button, FlexComponent, Title } from "../common";

export const PaymentPromise = () => {
  return (
    <FlexComponent align={"flex-start"} gap="40px">
      <Title label="Prometo pagar" variant="subtitle" />

      <FlexComponent direction={"row"} gap="24px">
        {/* ¿Pagara? */}
        <Title label={""} variant="subtitle" />
      </FlexComponent>
    </FlexComponent>
  );
};

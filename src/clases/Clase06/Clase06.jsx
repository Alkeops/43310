import { ClientPromise } from "../../components/ClientPromise";
import { PaymentPromise } from "../../components/PaymentPromise";
import { FlexComponent, Title } from "../../components/common";

export const Clase06 = () => {
  return (
    <FlexComponent gap="24px" align={"flex-start"}>
      <Title label="Clase06" />
      {/* PROMESA 1 */}
      <PaymentPromise />
      {/* PROMESA 2 */}
      <ClientPromise />
    </FlexComponent>
  );
};

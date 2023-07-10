import { FlexComponent, Title } from "../common";

export const ClientPromise = () => {
  return (
    <FlexComponent align={"flex-start"} gap="40px">
      <Title label=""/* Prometo ir */ variant="subtitle" />

      <FlexComponent direction={"row"} gap="24px">
        {/* ¿Vendra? */}
        <Title label={""} variant="subtitle" />
      </FlexComponent>
    </FlexComponent>
  );
};

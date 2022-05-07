import React from "react";
import { useController } from "react-hook-form";
import InputText from "./InputText";

export function Input({ name, control, ...rest }) {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <InputText value={field.value} onChangeText={field.onChange} {...rest} />
  );
}

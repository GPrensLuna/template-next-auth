"use client";

import type { ReactNode } from "react";
import type { DefaultValues, FieldValues, SubmitHandler } from "react-hook-form";
import type { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";


interface Props<T extends FieldValues> {
  children: (methods: ReturnType<typeof useForm<T>>) => ReactNode;
  defaultValues: DefaultValues<T>;
  schema: z.ZodSchema<T>;
  mode: "onBlur" | "onChange" | "onSubmit" | "all" | "onTouched";
  onSubmit: SubmitHandler<T>;
}


const FormCustom = <T extends FieldValues>({
  children,
  defaultValues,
  schema,
  mode,
  onSubmit,
}: Props<T>): ReactNode => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    mode,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children(methods)}
      </form>
    </FormProvider>
  );
};

export default FormCustom;

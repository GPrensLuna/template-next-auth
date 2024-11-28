"use client";

import type { ReactNode } from "react";
import type { DefaultValues, FieldValues, SubmitHandler } from "react-hook-form";
import type { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";


interface FormCustomProps<T extends FieldValues> {
  children: (methods: ReturnType<typeof useForm<T>>) => ReactNode;
  defaultValues: DefaultValues<T>;
  schema: z.ZodSchema<T>;
  mode: "onBlur" | "onChange" | "onSubmit" | "all" | "onTouched";
  className?: string;
  onSubmit: SubmitHandler<T>;
  isPending?: boolean;
  btmLoader?: string;
  btmLabel?: string;
  btmClassName?: string;
}


const FormCustom = <T extends FieldValues>({
  children,
  defaultValues,
  schema,
  mode,
  isPending,
  btmLoader,
  btmLabel,
  onSubmit,
}: FormCustomProps<T>): JSX.Element => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    mode,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}>
        {children(methods)}
        <button
          disabled={isPending}
          type="submit">
          <span className="font-mono text-xl font-bold uppercase text-secondary-custom">
            {isPending ? btmLoader : btmLabel}
          </span>
        </button>
      </form>
    </FormProvider>
  );
};

export default FormCustom;

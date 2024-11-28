"use client";
import type { Control, FieldValues, Path } from "react-hook-form";

import { Controller } from "react-hook-form";


interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  control: Control<T>;
}


const InputForm = <T extends FieldValues>({
  name,
  type = "text",
  placeholder = "",
  control,
  label,

}: Props<T>): JSX.Element => {


  return (
    <article className="h-100vh w-100vw grid items-center justify-center">
      <label  htmlFor={name}>
        {label}
      </label>

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              id={name as string}
              name={name as string}
              placeholder={placeholder}
              type={type}
              onBlur={field.onBlur}
            />
            <p className="pt-1 h-4 text-sm text-red-500">{error ? error.message : " "}</p>
          </>
        )}
      />
    </article>
  );
};

export default InputForm;

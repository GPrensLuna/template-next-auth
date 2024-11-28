"use client";
import variants from '@/modules/app/UI/styles/variants.styles';
import classNames from 'classnames';
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
	classNameLabel?: string;
	classNameInput?: string;
  control: Control<T>;
	variants?: {
		text?: keyof typeof variants.text;
		background?: keyof typeof variants.background;
		border?: keyof typeof variants.border;
		padding?: keyof typeof variants.padding;
		justify?: keyof typeof variants.justify;
	};
}

const InputForm = <T extends FieldValues>({
  name,
  type = "text",
  placeholder = "",
  control,
	classNameLabel,
	classNameInput,
  label,
  variants: variantOptions = {},
}: Props<T>): JSX.Element => {


  return (
    <article className="h-100vh w-100vw grid items-center justify-center">
      <label htmlFor={name} 	className={classNames(
				classNameLabel,
				variants.text[variantOptions.text || "default"],
				variants.background[variantOptions.background || "default"],
				variants.border[variantOptions.border || "default"],
				variants.padding[variantOptions.padding || "default"],
				variants.justify[variantOptions.justify || "start"],
			)}>
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
							className={classNames(
								classNameInput,
								variants.text[variantOptions.text || "default"],
								variants.background[variantOptions.background || "default"],
								variants.border[variantOptions.border || "default"],
								variants.padding[variantOptions.padding || "default"],
								variants.justify[variantOptions.justify || "start"],
							)}
            />
            <p className="pt-1 h-4 text-sm text-red-500">{error ? error.message : " "}</p>
          </>
        )}
      />
    </article>
  );
};

export default InputForm;

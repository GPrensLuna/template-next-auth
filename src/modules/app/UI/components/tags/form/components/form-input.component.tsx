"use client";
import type { Control, FieldValues, Path } from "react-hook-form";

import classNames from "classnames";
import { Controller } from "react-hook-form";

import { getVariantClasses, type VariantOptions } from "@/modules/app/UI/styles/variants.styles";

interface Props<T extends FieldValues> {
	name: Path<T>;
	label: string;
	type?: string;
	placeholder?: string;
	className?: string;
	classNameLabel?: string;
	classNameInput?: string;
	control: Control<T>;
	variantsLabel?: VariantOptions;
	variantsInput?: VariantOptions;
}

export const FormInput = <T extends FieldValues>({
	name,
	type = "text",
	placeholder = "",
	control,
	className,
	classNameLabel,
	classNameInput,
	label,
	variantsLabel: variantOptionsLabel = {},
	variantsInput: variantOptionsInput = {},
}: Props<T>): JSX.Element => {
	return (
		<article
			className={classNames("grid h-auto transition-all duration-300 ease-in-out", className)}
		>
			<label
				className={classNames(
					"mb-2 flex h-6 w-full items-center transition-all duration-300 ease-in-out",
					classNameLabel,
					getVariantClasses(variantOptionsLabel),
				)}
				htmlFor={name}
			>
				{label}
			</label>

			<Controller
				control={control}
				name={name}
				render={({ field, fieldState: { error } }) => (
					<>
						<input
							{...field}
							className={classNames(
								"h-14 w-full transition-all duration-300 ease-in-out",
								classNameInput,
								getVariantClasses(variantOptionsInput),
							)}
							id={name as string}
							name={name as string}
							placeholder={placeholder}
							type={type}
							onBlur={field.onBlur}
						/>
						<p className="h-5 text-sm text-red-500 transition-all duration-300 ease-in-out">
							{error ? error.message : " "}
						</p>
					</>
				)}
			/>
		</article>
	);
};

"use client";
import type { Control, FieldValues, Path } from "react-hook-form";

import classNames from "classnames";
import { Controller } from "react-hook-form";

import variants from "@/modules/app/UI/styles/variants.styles";
interface Props<T extends FieldValues> {
	name: Path<T>;
	label: string;
	type?: string;
	placeholder?: string;
	className?: string;
	classNameLabel?: string;
	classNameInput?: string;
	control: Control<T>;
	variantsLabel?: {
		text?: keyof typeof variants.text;
		fontSize?: keyof typeof variants.fontSize;
		background?: keyof typeof variants.background;
		border?: keyof typeof variants.border;
		rounded?: keyof typeof variants.rounded;
		padding?: keyof typeof variants.padding;
		justify?: keyof typeof variants.justify;
	};
	variantsInput?: {
		text?: keyof typeof variants.text;
		fontSize?: keyof typeof variants.fontSize;
		background?: keyof typeof variants.background;
		border?: keyof typeof variants.border;
		rounded?: keyof typeof variants.rounded;
		padding?: keyof typeof variants.padding;
		justify?: keyof typeof variants.justify;
	};
}

const InputForm = <T extends FieldValues>({
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
					variants.text[variantOptionsLabel.text || "default"],
					variants.fontSize[variantOptionsLabel.fontSize || "default"],
					variants.background[variantOptionsLabel.background || "default"],
					variants.border[variantOptionsLabel.border || "default"],
					variants.rounded[variantOptionsLabel.rounded || "default"],
					variants.padding[variantOptionsLabel.padding || "default"],
					variants.justify[variantOptionsLabel.justify || "start"],
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
								variants.fontSize[variantOptionsInput.fontSize || "default"],
								variants.background[variantOptionsInput.background || "default"],
								variants.border[variantOptionsInput.border || "default"],
								variants.rounded[variantOptionsInput.rounded || "default"],
								variants.padding[variantOptionsInput.padding || "default"],
								variants.justify[variantOptionsInput.justify || "start"],
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

export default InputForm;

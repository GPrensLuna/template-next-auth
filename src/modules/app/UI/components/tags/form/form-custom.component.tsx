"use client";

import type { ReactNode } from "react";
import type { DefaultValues, FieldValues, SubmitHandler } from "react-hook-form";
import type { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import { FormProvider, useForm } from "react-hook-form";

import variants from "@/modules/app/UI/styles/variants.styles";

interface Props<T extends FieldValues> {
	children: (methods: ReturnType<typeof useForm<T>>) => ReactNode;
	defaultValues: DefaultValues<T>;
	schema: z.ZodSchema<T>;
	mode: "onBlur" | "onChange" | "onSubmit" | "all" | "onTouched";
	onSubmit: SubmitHandler<T>;
	className?: string;
	variants?: {
		text?: keyof typeof variants.text;
		fontSize?: keyof typeof variants.fontSize;
		background?: keyof typeof variants.background;
		border?: keyof typeof variants.border;
		rounded?: keyof typeof variants.rounded;
		padding?: keyof typeof variants.padding;
		justify?: keyof typeof variants.justify;
	};
}

const FormCustom = <T extends FieldValues>({
	children,
	defaultValues,
	schema,
	mode,
	className,
	variants: variantOptions = {},
	onSubmit,
}: Props<T>): ReactNode => {
	const methods = useForm<T>({
		resolver: zodResolver(schema),
		defaultValues,
		mode,
	});

	return (
		<FormProvider {...methods}>
			<form
				className={classNames(
					className,
					variants.text[variantOptions.text || "default"],
					variants.fontSize[variantOptions.fontSize || "default"],
					variants.background[variantOptions.background || "default"],
					variants.border[variantOptions.border || "default"],
					variants.rounded[variantOptions.rounded || "default"],
					variants.padding[variantOptions.padding || "default"],
					variants.justify[variantOptions.justify || "start"],
				)}
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				{children(methods)}
			</form>
		</FormProvider>
	);
};

export default FormCustom;

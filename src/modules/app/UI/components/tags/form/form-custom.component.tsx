"use client";

import type { VariantOptions } from "@/modules/app/UI/styles/variants.styles";
import type { ReactNode } from "react";
import type { DefaultValues, FieldValues, SubmitHandler } from "react-hook-form";
import type { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import { FormProvider, useForm } from "react-hook-form";

import { getVariantClasses } from "@/modules/app/UI/styles/variants.styles";

interface Props<T extends FieldValues> {
	children: (methods: ReturnType<typeof useForm<T>>) => ReactNode;
	defaultValues: DefaultValues<T>;
	schema: z.ZodSchema<T>;
	mode: "onBlur" | "onChange" | "onSubmit" | "all" | "onTouched";
	onSubmit: SubmitHandler<T>;
	className?: string;
	variants?: VariantOptions;
}

export const FormCustom = <T extends FieldValues>({
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
				className={classNames(className, getVariantClasses(variantOptions))}
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				{children(methods)}
			</form>
		</FormProvider>
	);
};

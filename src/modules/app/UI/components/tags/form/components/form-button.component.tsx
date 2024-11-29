"use client";
import type { VariantOptions } from "@/modules/app/UI/styles/variants.styles";
import type { FC, MouseEvent, ReactNode } from "react";

import classNames from "classnames";
import { useCallback } from "react";

import { getVariantClasses } from "@/modules/app/UI/styles/variants.styles";

interface Props {
	label: string;
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	type?: "submit" | "button";
	children?: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	variants?: VariantOptions;
}

export const FormButton: FC<Props> = ({
	label,
	className,
	onClick,
	type = "button",
	children,
	disabled,
	loading,
	variants: variantOptions = {},
}) => {
	const isBusy = loading;

	const handleClick = useCallback(
		(event: MouseEvent<HTMLButtonElement>): void => {
			if (onClick) {
				onClick(event);
			}
		},
		[onClick],
	);

	return (
		<button
			aria-busy={isBusy}
			className={classNames(className, getVariantClasses(variantOptions), { "is-loading": isBusy })}
			disabled={disabled || isBusy}
			type={type === "submit" ? "submit" : "button"}
			onClick={handleClick}
		>
			{isBusy ? "Loading..." : label}
			{children}
		</button>
	);
};

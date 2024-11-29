"use client";
import type { FC, MouseEvent, ReactNode } from "react";

import classNames from "classnames";
import { memo, useCallback } from "react";

import variants from "@/modules/app/UI/styles/variants.styles";

interface Props {
	label: string;
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	type?: "submit" | "button";
	children?: ReactNode;
	disabled?: boolean;
	loading?: boolean;
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

const FormButton: FC<Props> = ({
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
		(event: MouseEvent<HTMLButtonElement>) => {
			if (onClick) {
				onClick(event);
			}
		},
		[onClick],
	);

	return (
		<button
			aria-busy={isBusy}
			className={classNames(
				className,
				variants.text[variantOptions.text || "default"],
				variants.fontSize[variantOptions.fontSize || "default"],
				variants.background[variantOptions.background || "default"],
				variants.border[variantOptions.border || "default"],
				variants.rounded[variantOptions.rounded || "default"],
				variants.padding[variantOptions.padding || "default"],
				variants.justify[variantOptions.justify || "default"],
				{ "is-loading": isBusy },
			)}
			disabled={disabled || isBusy}
			type={type === "submit" ? "submit" : "button"}
			onClick={handleClick}
		>
			{isBusy ? "Loading..." : label}
			{children}
		</button>
	);
};

export default memo(FormButton);

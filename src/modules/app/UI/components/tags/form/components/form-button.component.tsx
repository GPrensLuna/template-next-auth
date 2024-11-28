"use client";
import variants from '@/modules/app/UI/styles/variants.styles';
import classNames from "classnames";
import { FC, memo, MouseEvent, ReactNode, useCallback } from "react";

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
		background?: keyof typeof variants.background;
		border?: keyof typeof variants.border;
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
		[onClick]
	);

	return (
		<button
			className={classNames(
				className,
				variants.text[variantOptions.text || "default"],
				variants.background[variantOptions.background || "default"],
				variants.border[variantOptions.border || "default"],
				variants.padding[variantOptions.padding || "default"],
				variants.justify[variantOptions.justify || "default"],
				{ "is-loading": isBusy }
			)}
			onClick={handleClick}
			type={type}
			disabled={disabled || isBusy}
			aria-busy={isBusy}
		>
			{isBusy ? "Loading..." : label}
			{children}
		</button>
	);
};

export default memo(FormButton);

"use client";
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
}

const FormButton: FC<Props> = ({
	label,
	className,
	onClick,
	type,
	children,
	disabled,
	loading,
}) => {
	const isBusy = loading;

	const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(event);
		}
	}, [onClick]);

	return (
		<button
			className={classNames(className, { "is-loading": isBusy })}
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
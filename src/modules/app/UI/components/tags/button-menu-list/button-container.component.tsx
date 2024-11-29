"use client";
import type { FC, ReactNode } from "react";

import { useMenuHandlers } from "./hook/user-menu-handlers.hook";

interface Props {
	children: (isOpen?: boolean) => ReactNode;
	className?: string;
}

const ButtonContainer: FC<Props> = ({ children, className }) => {
	const { isOpen, handleClick, handleMouseEnter, handleMouseLeave } = useMenuHandlers();

	return (
		<div
			className={className ? `relative h-full ${className}` : "relative h-full"}
			role="none"
			onClick={() => handleClick()}
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={handleMouseLeave}
		>
			{children(isOpen)}
		</div>
	);
};

export default ButtonContainer;

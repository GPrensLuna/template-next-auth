"use client";
import { useCallback, useState } from "react";

export const useMenuHandlers = (): {
	isOpen: boolean;
	handleClick: () => void;
	handleMouseEnter: () => void;
	handleMouseLeave: () => void;
} => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClick = useCallback(() => {
		setIsOpen(!isOpen);
	}, []);

	const handleMouseEnter = useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setIsOpen(false);
	}, []);

	return {
		isOpen,
		handleClick,
		handleMouseEnter,
		handleMouseLeave,
	};
};

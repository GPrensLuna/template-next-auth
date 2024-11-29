"use client";

import type { ReactNode } from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { ButtonContainer, MenuListItems } from "../tags";

export const ButtonToggle = (): ReactNode => {
	const { theme, setTheme } = useTheme();

	const options = [
		{
			id: "light",
			label: "Light",
			onClick: (): void => setTheme("light"),
		},
		{
			id: "dark",
			label: "Dark",
			onClick: (): void => setTheme("dark"),
		},
		{
			id: "system",
			label: "System",
			onClick: (): void => setTheme("system"),
		},
	];

	return (
		<ButtonContainer>
			{(isOpen): ReactNode => (
				<>
					<button type="button">
						{theme !== "dark" ? <Sun className="h-auto w-8" /> : <Moon className="h-auto w-8" />}
					</button>
					{isOpen && <MenuListItems options={options} />}
				</>
			)}
		</ButtonContainer>
	);
};

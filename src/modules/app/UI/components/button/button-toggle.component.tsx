"use client";

import type { ReactNode } from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

import { ButtonContainer, MenuListItems } from "../tags";

const ButtonToggleComponent = (): ReactNode => {
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
		<ButtonContainer className="flex h-full items-center">
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

export default ButtonToggleComponent;

export const ButtonToggle = dynamic(() => import("./button-toggle.component"), {
	ssr: false,
});

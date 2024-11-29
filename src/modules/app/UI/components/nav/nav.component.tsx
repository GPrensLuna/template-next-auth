"use client";
import type { ReactNode } from "react";

import Link from "next/link";

import { ButtonToggle } from "../button";
import { ButtonContainer, MenuListItems } from "../tags";

const Nav = (): ReactNode => {
	const options = [
		{
			id: "home",
			label: "Home",
			href: "/",
		},
		{
			id: "auth",
			label: "Auth",
			href: "/auth",
		},
	];

	return (
		<nav className="flex h-16 w-full px-10">
			<ul className="flex h-full w-[80%] justify-around">
				{options.map((option) => (
					<li key={option.id} className="flex h-full items-center px-4">
						<ButtonContainer className="flex h-full items-center">
							{(isOpen) => (
								<>
									<Link href={option.href || "#"}>{option.label}</Link>
									{isOpen && <MenuListItems options={options} />}
								</>
							)}
						</ButtonContainer>
					</li>
				))}
			</ul>
			<section className="flex h-full w-[20%]">
				<ButtonToggle />
			</section>
		</nav>
	);
};

export default Nav;

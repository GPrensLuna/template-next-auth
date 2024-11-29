"use client";
import type { ReactNode } from "react";

import Link from "next/link";

import ButtonContainer from "../tags/button-menu-list/button-container.component";
import MenuListItems from "../tags/button-menu-list/components/list-menu-items.component";

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
		{
			id: "contact",
			label: "Contact",
			href: "/contact",
		},
	];

	return (
		<nav className="w-full">
			<ul className="flex justify-around">
				<li>
					<ButtonContainer>
						{(isOpen) => (
							<Link href="/">
								Home
								{isOpen && <MenuListItems options={options} />}
							</Link>
						)}
					</ButtonContainer>
				</li>
				<li>
					<Link href="/auth">auth</Link>
				</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Nav;

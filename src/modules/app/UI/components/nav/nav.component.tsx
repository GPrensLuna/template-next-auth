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
		{
			id: "contact",
			label: "Contact",
			href: "/contact",
		},
	];

	return (
		<nav className="flex h-16 w-full items-center px-10">
			<ul className="flex w-[80%] justify-around">
				<li>
					<ButtonContainer>
						{(isOpen) => (
							<div>
								<Link href="/">Home</Link>
								{isOpen && <MenuListItems options={options} />}
							</div>
						)}
					</ButtonContainer>
				</li>
				<li>
					<Link href="/auth">auth</Link>
				</li>
				<li>Contact</li>
			</ul>
			<section className="flex h-auto w-[20%] items-center justify-center">
				<ButtonToggle />
			</section>
		</nav>
	);
};

export default Nav;

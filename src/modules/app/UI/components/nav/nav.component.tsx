import type { ReactNode } from "react";

import Link from "next/link";

const Nav = (): ReactNode => {
	return (
		<nav className="w-full">
			<ul className="flex justify-around">
				<li>
					<Link href="/">Home</Link>
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

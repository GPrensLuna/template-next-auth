"use client";
import type { FC, MouseEventHandler, ReactNode } from "react";

import classNames from "classnames";
import Link from "next/link";
import { memo } from "react";

import ArticleVariants from "../../article-variants.component";
import TitleCustom from "../../title-custom.component";

interface Props {
	options: {
		id: string;
		label: string;
		href?: string;
		onClick?: MouseEventHandler<HTMLAnchorElement>;
	}[];
	className?: string | undefined;
}

const MenuListItem: FC<{
	subNav: {
		id: string;
		label: string;
		href?: string;
		onClick?: MouseEventHandler<HTMLAnchorElement>;
	};
}> = memo(({ subNav }) => (
	<TitleCustom
		key={subNav.id}
		className="block h-full w-full rounded-md hover:bg-gray-300 dark:hover:text-black"
		tag="span"
	>
		<Link
			aria-controls="menu-items"
			aria-expanded="false"
			aria-haspopup="false"
			className="block h-full w-full rounded-md px-4 py-2"
			href={subNav.href || "#"}
			role="menuitem"
			onClick={subNav.onClick || ((): void => {})}
		>
			{subNav.label}
		</Link>
	</TitleCustom>
));

MenuListItem.displayName = "MenuListItem";

const MenuListItems: FC<Props> = ({ options, className }): ReactNode => (
	<ArticleVariants
		className={classNames(
			className,
			"w-4rem absolute left-0 flex min-h-11 min-w-11 transform flex-col rounded-xl p-2 opacity-100 shadow-lg transition-all duration-300 ease-in-out",
		)}
		role="menu"
	>
		{options
			.sort((a, b) => a.id.localeCompare(b.id))
			.map((subNav) => (
				<MenuListItem key={subNav.id} subNav={subNav} />
			))}
	</ArticleVariants>
);

export default memo(MenuListItems);

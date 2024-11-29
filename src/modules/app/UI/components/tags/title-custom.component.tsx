import type { FC, ReactNode } from "react";

import classNames from "classnames";

import { getVariantClasses, type VariantOptions } from "@/modules/app/UI/styles/variants.styles";

interface Props {
	children: ReactNode;
	className?: string;
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
	variants?: VariantOptions;
}

export const TitleCustom: FC<Props> = ({
	children,
	className,
	variants: variantOptions = {},
	tag: Component = "h1",
}) => {
	const classes = classNames(className, getVariantClasses(variantOptions));

	return <Component className={classes}>{children}</Component>;
};

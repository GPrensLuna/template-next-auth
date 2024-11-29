import type { FC, ReactNode } from "react";

import classNames from "classnames";

import { getVariantClasses, type VariantOptions } from "@/modules/app/UI/styles/variants.styles";

interface Props {
	children: ReactNode;
	className?: string;
	variants?: VariantOptions;
	role?: string;
}

export const ArticleVariants: FC<Props> = ({
	children,
	variants: variantOptions = {},
	className,
	role,
}): ReactNode => {
	return (
		<article className={classNames(className, getVariantClasses(variantOptions))} role={role}>
			{children}
		</article>
	);
};

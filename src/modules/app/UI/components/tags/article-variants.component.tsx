import type { FC, ReactNode } from "react";

import classNames from "classnames";

import variants from "@/modules/app/UI/styles/variants.styles";

interface Props {
	children: ReactNode;
	className?: string;
	variants?: {
		text?: keyof typeof variants.text;
		fontSize?: keyof typeof variants.fontSize;
		background?: keyof typeof variants.background;
		border?: keyof typeof variants.border;
		rounded?: keyof typeof variants.rounded;
		padding?: keyof typeof variants.padding;
		justify?: keyof typeof variants.justify;
	};
	role?: string;
}

const ArticleVariants: FC<Props> = ({
	children,
	variants: variantOptions = {},
	className,
	role,
}): ReactNode => {
	return (
		<article
			className={classNames(
				className,
				variants.text[variantOptions.text || "default"],
				variants.fontSize[variantOptions.fontSize || "default"],
				variants.background[variantOptions.background || "default"],
				variants.border[variantOptions.border || "default"],
				variants.rounded[variantOptions.rounded || "default"],
				variants.padding[variantOptions.padding || "default"],
				variants.justify[variantOptions.justify || "start"],
			)}
			role={role}
		>
			{children}
		</article>
	);
};

export default ArticleVariants;

ArticleVariants.displayName = "ArticleVariants";

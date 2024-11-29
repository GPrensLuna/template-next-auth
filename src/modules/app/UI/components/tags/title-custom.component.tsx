import type { FC, ReactNode } from "react";

import classNames from "classnames";

import variants from "@/modules/app/UI/styles/variants.styles";

interface Props {
	children: ReactNode;
	className?: string;
	tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	variants?: {
		text?: keyof typeof variants.text;
		fontSize?: keyof typeof variants.fontSize;
		background?: keyof typeof variants.background;
		border?: keyof typeof variants.border;
		rounded?: keyof typeof variants.rounded;
		padding?: keyof typeof variants.padding;
		justify?: keyof typeof variants.justify;
	};
}

const TitleCustom: FC<Props> = ({
	children,
	className,
	variants: variantOptions = {},
	tag: Component = "h1",
}) => {
	const { text, fontSize, background, border, rounded, padding, justify } = variantOptions;

	const classes = classNames(
		className,
		text ? variants.text[text] : undefined,
		fontSize ? variants.fontSize[fontSize] : undefined,
		background ? variants.background[background] : undefined,
		border ? variants.border[border] : undefined,
		rounded ? variants.rounded[rounded] : undefined,
		padding ? variants.padding[padding] : undefined,
		justify ? variants.justify[justify] : undefined,
	);

	return <Component className={classes}>{children}</Component>;
};

export default TitleCustom;

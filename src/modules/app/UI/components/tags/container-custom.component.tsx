import type { FC, ReactNode } from "react";

import classNames from "classnames";

interface Props {
	children: ReactNode;
	className?: string;
}
const ContainerCustom: FC<Props> = ({ children, className }) => {
	return (
		<div
			className={classNames(
				className,
				"mx-auto grid h-[75vh] w-[75vw] max-w-screen-xl items-center justify-items-center",
			)}
		>
			{children}
		</div>
	);
};

export default ContainerCustom;

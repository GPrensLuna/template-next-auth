"use client";

import type { ComponentProps, ReactNode } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider = ({
	children,
	...props
}: ComponentProps<typeof NextThemesProvider>): ReactNode => {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

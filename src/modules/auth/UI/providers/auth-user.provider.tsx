"use client";

import type { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

export const AuthUserProvider = ({ children }: { children: ReactNode }): ReactNode => {
	return <SessionProvider>{children}</SessionProvider>;
};

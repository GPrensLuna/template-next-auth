/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";

import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth }: any = NextAuth({
	session: { strategy: "jwt" },
	...authConfig,
});

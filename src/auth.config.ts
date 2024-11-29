import type { NextAuthConfig } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

interface User {
	name: string;
	email: string;
}

export default {
	providers: [
		CredentialsProvider({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (
				credentials: Partial<Record<"email" | "password", unknown>>,
			): Promise<User | null> => {
				const email = credentials.email as string;
				const password = credentials.password as string;

				if (!email || !password) {
					throw new Error("Invalid credentials.");
				}

				const user = { name: "John Doe", email: "john.doe@example.com" };

				return user;
			},
		}),
	],
} satisfies NextAuthConfig;

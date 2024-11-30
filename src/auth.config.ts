import type { NextAuthConfig } from "next-auth";
import type { ResSignUp } from "./modules/auth/applications/dto";

import Credentials from "next-auth/providers/credentials";

export default {
	providers: [
		Credentials({
			authorize: async (
				credentials: Partial<Record<"email" | "password", unknown>>,
			): Promise<ResSignUp | null> => {
				console.log("credentials: ", credentials);
				if (credentials.email !== "test@test.com") {
					throw new Error("Invalid credentials.");
				}

				// const email = credentials.email as string;
				// const password = credentials.password as string;

				// if (!email || !password) {
				// 	throw new CustomError("Invalid credentials.", 400);
				// }

				// const data = {
				// 	id: "1",
				// 	last_name: "last_name",
				// 	first_name: "first_name",
				// 	email,
				// 	picture: "picture",
				// 	password: "dummy_password",
				// };

				// return ResSignUp.fromEntity(data);
				return {
					id: "1",
					last_name: "last_name",
					first_name: "first_name",
					email: "test@test.com",
					picture: "picture",
				};
			},
		}),
	],
} satisfies NextAuthConfig;

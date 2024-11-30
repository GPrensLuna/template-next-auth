import type { NextAuthConfig } from "next-auth";
import type { ResSignInDto } from "./modules/auth/applications/dtos";

import Credentials from "next-auth/providers/credentials";

import { ReqSignInDto } from "./modules/auth/applications/dtos";
import { ActionSignIn } from "./modules/auth/infrastructure/controller/sign-in.controller";

export default {
	providers: [
		Credentials({
			authorize: async (
				credentials: Partial<Record<"email" | "password", unknown>>,
			): Promise<ResSignInDto | null> => {
				try {
					if (credentials.email !== "test@test.com") {
						throw new Error("Invalid credentials.");
					}
					const data = credentials as ReqSignInDto;
					const res = await ActionSignIn(ReqSignInDto.fromEntity(data));

					return res;
				} catch {
					throw new Error("Error en la autorización: ");
				}
			},
		}),
	],
} satisfies NextAuthConfig;

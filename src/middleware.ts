import type { NextRequest } from "next/server";

import NextAuth from "next-auth";

import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req: NextRequest) {
	console.log("req: ", req);
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

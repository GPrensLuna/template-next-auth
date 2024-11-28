import NextAuth from "next-auth";
import { NextRequest } from "next/server";
import authConfig from "./auth.config";

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
	console.log("req: ", req);

	// Your custom middleware logic goes here
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);
/* 
interface AuthenticatedRequest extends NextRequest {
	auth?: any;
} */

export default auth(async function middleware() {
	// console.log("req: ", req);
	// if (!req.auth && req.nextUrl.pathname !== "/auth") {
	// 	const newUrl = new URL("/auth", req.nextUrl.origin);

	// 	return NextResponse.redirect(newUrl);
	// }

	return NextResponse.next();
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

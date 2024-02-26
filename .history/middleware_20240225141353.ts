import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import { DEFAULT_LOGIN_ADMIN_REDIRECT, DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from "@/routes";
import { useCurrentUser } from "./hooks/use-current-user";


const { auth } = NextAuth(authConfig);

export default auth(async(req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const user = await useCurrentUser();

    if (isApiAuthRoute) {
        return ;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            if (user?.role === "ADMIN") {
                return Response.redirect(new URL(DEFAULT_LOGIN_ADMIN_REDIRECT, nextUrl))
            }if (role === "USER") {
                return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
            }
        }
        return ;
    }

    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
        callbackUrl += nextUrl.search;
        }

        const encodedCallbackUrl = encodeURIComponent(callbackUrl);

        return Response.redirect(new URL(
        `/auth/login?callbackUrl=${encodedCallbackUrl}`,
        nextUrl
        ));
    }

    return ;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
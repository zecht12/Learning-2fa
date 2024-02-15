import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, publicRoutes, authRoutes, apiAuthPrefix } from "./routes";

const authHandler = NextAuth(authConfig);

export default async function middleware(req) {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl);
    const isAuthRoute = authRoutes.includes(nextUrl);

    if (isApiAuthRoute) {
        return next();
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            res.redirect(new URL(DEFAULT_LOGIN_REDIRECT));
            return;
        }
        return next();
    }
}

// Optionally, don't invoke Middleware on some paths
export const config = {
    api: {
        bodyParser: false,
    },
};
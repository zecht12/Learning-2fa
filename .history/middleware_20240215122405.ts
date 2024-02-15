import authConfig from "./auth.config";
import NextAuth, { NextAuthRequest } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, publicRoutes, authRoutes, apiAuthPrefix } from "./routes";

// Gunakan tipe yang benar untuk request NextAuth
type NextAuthHandler = (req: NextAuthRequest) => void | Response | Promise<void | Response>;

const { auth } = NextAuth(authConfig);

const middleware: NextAuthHandler = async (req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return null;
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT).toString()); // Perhatikan penggunaan `toString()` untuk URL
        }
        return null;
    }
};

export default auth(middleware);

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}

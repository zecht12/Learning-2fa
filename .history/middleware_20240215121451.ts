import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { Response } from "node-fetch";
import authConfig from "./auth.config";
import { DEFAULT_LOGIN_REDIRECT, publicRoutes, authRoutes, apiAuthPrefix } from "./routes";

const authHandler = NextAuth(authConfig);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { nextUrl } = req.query; // Access query parameters from req.query instead of req
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl?.startsWith(apiAuthPrefix); // Check if nextUrl starts with apiAuthPrefix
    const isPublicRoute = publicRoutes.includes(nextUrl); // Check if nextUrl is in publicRoutes
    const isAuthRoute = authRoutes.includes(nextUrl); // Check if nextUrl is in authRoutes

    if (isApiAuthRoute) {
        return null;
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            // Redirect using res.redirect instead of Response.redirect
            res.redirect(new URL(DEFAULT_LOGIN_REDIRECT).toString());
            return;
        }
        return null;
    }
};

// Optionally, don't invoke Middleware on some paths
export const config = {
    api: {
        bodyParser: false, // Disable body parsing, as we don't need it here
    },
};

export { authHandler }; // Export authHandler for use in other modules

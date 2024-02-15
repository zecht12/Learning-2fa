import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { DEFAULT_LOGIN_REDIRECT, publicRoutes, authRoutes, apiAuthPrefix } from "./routes";
import { NextApiRequest, NextApiResponse } from "next";

const { auth } = NextAuth(authConfig);

export default auth<NextApiRequest, NextApiResponse>({
  async callback(req, res) {
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
        return res.redirect(new URL(DEFAULT_LOGIN_REDIRECT).toString());
      }
      return null;
    }
  }
});

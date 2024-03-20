import NextAuth from "next-auth"
import authConfig from "./auth.config"
import p

export const { handlers: { GET, POST }, auth,} = NextAuth({ ...authConfig })
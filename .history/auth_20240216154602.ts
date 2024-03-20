import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"


export const { handlers: { GET, POST }, auth, signIn, signOut} = NextAuth({
    callbacks:{
        async session({token,session}) {
            console.log({sessionToken: token, session})
            if (session.user) {
                session.user.customeField = token.customField;
            }
            return session;
        },
        async jwt({token}) {
            console.log({token})
            token.customField = "test";
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig
})
import NextAuth,{DefaultSession} from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"
import { getUserById } from "./data/user"

declare module "@auth/core"

export const { handlers: { GET, POST }, auth, signIn, signOut} = NextAuth({
    callbacks:{
        async session({token,session}) {
            console.log({sessionToken:session, token})
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.sessionToken.role = token.role;
            }
            return session;
        },
        async jwt({token}) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if(!existingUser) return token;

            token.role = existingUser.role;

            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig
})
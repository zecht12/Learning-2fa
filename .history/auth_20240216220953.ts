import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"
import { getUserById } from "./data/user"
import { UserRole } from "@prisma/client"

export const { handlers: { GET, POST }, auth, signIn, signOut} = NextAuth({
    events:{
        async linkAccount({user}) {
            await db.user.update({
                where: {id:user.id},
                data:{}
            })
        }
    },
    callbacks:{
        async session({token,session}) {
            console.log({sessionToken:session, token})
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }
            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
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
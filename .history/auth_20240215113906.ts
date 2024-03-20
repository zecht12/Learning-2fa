import NextAuth from "next-auth"
import auth

export const { handlers: { GET, POST }, auth,} = NextAuth({  })
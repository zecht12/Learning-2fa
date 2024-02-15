import NextAuth from "next-auth"
import a

export const { handlers: { GET, POST }, auth,} = NextAuth({  })
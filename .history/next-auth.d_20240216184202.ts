import NextAuth,{type DefaultSession} from "next-auth"

declare module "@auth/core"{
    interface session{
        user:{
            role:"ADMIN"|"user",
        } & DefaultSession["user"]
    }
}
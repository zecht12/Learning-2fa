import NextAuth,{type DefaultSession} from "next-auth";

export type 

declare module "@auth/core"{
    interface session{
        user:{
            role:"ADMIN"|"USER",
        } & DefaultSession["user"]
    }
}
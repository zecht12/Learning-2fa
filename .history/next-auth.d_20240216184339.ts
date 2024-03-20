import NextAuth,{type DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession["user"]&{
    role
}

declare module "@auth/core"{
    interface session{
        user:{
            role:"ADMIN"|"USER",
        } & DefaultSession["user"]
    }
}
import NextAuth,{type DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession["user"]{
    
}

declare module "@auth/core"{
    interface session{
        user:{
            role:"ADMIN"|"USER",
        } & DefaultSession["user"]
    }
}
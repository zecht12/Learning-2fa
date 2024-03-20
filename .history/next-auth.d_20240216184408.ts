import NextAuth,{type DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession["user"]&{
    role:"ADMIN"|"USER",
}

declare module "@auth/core"{
    interface session{
        user: ExtendedUser;
    }
}
import NextAuth,{type DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession["user"]&{
    role:"ADMIN"|"USER",
}

declare module "next-auth"{
    interface session{
        user: ExtendedUser;
    }
}
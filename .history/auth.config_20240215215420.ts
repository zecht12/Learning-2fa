import Credential from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";

export default {
providers:[
    Credential({
        async(credentials) {
            
        }
    })
]
} satisfies NextAuthConfig